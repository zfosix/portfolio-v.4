import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  limit,
  DocumentData,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User, Auth } from "firebase/auth";
import { toast } from "react-hot-toast";
import { FirebaseError } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

// Check if we're in the browser environment
if (typeof window !== 'undefined') {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  auth = getAuth(app);
} else {
  // For SSR - create placeholders
  app = {} as FirebaseApp;
  db = {} as Firestore;
  auth = {} as Auth;
}

const provider = new GoogleAuthProvider();

// Auth functions with postMessage handling
const loginWithGoogle = async (): Promise<User | null> => {
  try {
    // Add message listener for popup communication
    const messageHandler = (event: MessageEvent) => {
      if (event.data === 'auth-completed') {
        window.removeEventListener('message', messageHandler);
      }
    };
    window.addEventListener('message', messageHandler);

    const result = await signInWithPopup(auth, provider);
    
    // Notify parent window that auth is complete
    if (window.opener) {
      window.opener.postMessage('auth-completed', window.location.origin);
    }
    
    toast.success("Successfully logged in!");
    return result.user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          toast.error("Login cancelled. Please try again.");
          break;
        case 'auth/popup-blocked':
          toast.error("Login popup was blocked. Please allow popups for this site.");
          break;
        case 'auth/cancelled-popup-request':
          toast.error("Login request cancelled. Please try again.");
          break;
        case 'auth/network-request-failed':
          toast.error("Network error. Please check your connection and try again.");
          break;
        default:
          console.error("Login error:", error);
          toast.error(`Login failed: ${error.message}`);
      }
    } else {
      console.error("Unexpected login error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    // Notify any listening windows about logout
    if (window.opener) {
      window.opener.postMessage('auth-logout', window.location.origin);
    }
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Failed to logout. Please try again.");
    throw error;
  }
};

// Rest of the code remains the same
interface MessageWithDefaultPhoto extends Message {
  photo: string;
}

interface Message {
  id: string;
  username: string;
  message: string;
  photo?: string;
  timestamp: Date;
  userId: string;
}

export const formatTimestamp = (timestamp: unknown): Date | null => {
  try {
    if (!timestamp) {
      console.warn("Timestamp is null or undefined.");
      return null;
    }

    if (timestamp instanceof Date) {
      return timestamp;
    }

    if (timestamp instanceof Timestamp) {
      return timestamp.toDate();
    }

    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      "seconds" in timestamp &&
      "nanoseconds" in timestamp
    ) {
      const { seconds, nanoseconds } = timestamp as {
        seconds: number;
        nanoseconds: number;
      };
      return new Date(seconds * 1000 + nanoseconds / 1000000);
    }

    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      "_seconds" in timestamp &&
      "_nanoseconds" in timestamp
    ) {
      const { _seconds, _nanoseconds } = timestamp as {
        _seconds: number;
        _nanoseconds: number;
      };
      return new Date(_seconds * 1000 + _nanoseconds / 1000000);
    }

    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      typeof (timestamp as { toDate?: () => Date }).toDate === "function"
    ) {
      try {
        return (timestamp as { toDate: () => Date }).toDate();
      } catch (err) {
        console.error("Error calling toDate():", err);
        return null;
      }
    }

    if (typeof timestamp === "number") {
      return new Date(timestamp);
    }

    if (typeof timestamp === "string") {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        return date;
      }
      console.warn("Invalid date string:", timestamp);
      return null;
    }

    console.warn("Unknown timestamp format:", timestamp);
    return null;
  } catch (error) {
    console.error("Error formatting timestamp:", error, timestamp);
    return null;
  }
};

export const getFormattedTimestamp = (timestamp: Date | Timestamp | number | string): string => {
  const date = formatTimestamp(timestamp);
  if (!date) return 'No date';
  
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    day: "2-digit",
    month: "short",
  }).format(date);
};

const getMessages = (
  callback: (messages: MessageWithDefaultPhoto[]) => void,
  onError?: (error: Error) => void
): (() => void) => {
  try {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(100)
    );

    return onSnapshot(
      messagesQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const messages = snapshot.docs.map((doc) => {
          const data = doc.data();
          
          if (!data.username || !data.message || !data.userId) {
            console.error("Missing required fields in message:", data);
            return null;
          }

          return {
            id: doc.id,
            username: data.username,
            message: data.message,
            photo: data.photo || "/default-profile.png",
            timestamp: data.timestamp,
            userId: data.userId,
          };
        }).filter((msg): msg is MessageWithDefaultPhoto => msg !== null);

        callback(messages);
      },
      (error) => {
        console.error("Error fetching messages:", error);
        if (onError) onError(error);
      }
    );
  } catch (error) {
    console.error("Failed to set up message listener:", error);
    if (onError) onError(error as Error);
    return () => {};
  }
};

const sendMessage = async (
  userName: string,
  message: string,
  photo?: string,
  userId?: string
): Promise<boolean> => {
  if (!message.trim() || !userId) {
    toast.error("Message or user ID is missing.");
    return false;
  }

  try {
    await addDoc(collection(db, "messages"), {
      username: userName,
      message: message,
      photo: photo || "/default-profile.png",
      userId: userId,
      timestamp: serverTimestamp(),
    });
    toast.success("Message sent successfully!");
    return true;
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
    throw error;
  }
};

export { db, auth, loginWithGoogle, logout, getMessages, sendMessage };