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

const provider: GoogleAuthProvider = new GoogleAuthProvider();

// Auth functions
const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success("Successfully logged in!");
    return result.user;
  } catch (error: unknown) {
    // Handle specific authentication errors
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error("Login cancelled. Please try again.");
      } else if (error.code === 'auth/popup-blocked') {
        toast.error("Login popup was blocked. Please allow popups for this site.");
      } else {
        console.error("Login error:", error);
        toast.error("Failed to login. Please try again.");
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
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Failed to logout. Please try again.");
    throw error;
  }
};

// Needed for type safety with non-null photo
interface MessageWithDefaultPhoto extends Message {
  photo: string;
}

// Firestore functions
interface Message {
  id: string;
  username: string;
  message: string;
  photo?: string; 
  timestamp: Date; 
  userId: string;
}

// Helper function that can be exported for message components to use
import { Timestamp } from "firebase/firestore";

export const formatTimestamp = (timestamp: unknown): Date | null => {
  try {
    if (!timestamp) {
      console.warn("Timestamp is null or undefined.");
      return null;
    }

    // Jika timestamp sudah berupa Date
    if (timestamp instanceof Date) {
      return timestamp;
    }

    // Jika timestamp adalah objek Timestamp dari Firestore
    if (timestamp instanceof Timestamp) {
      return timestamp.toDate();
    }

    // Jika timestamp adalah objek Firestore dengan properti seconds dan nanoseconds
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

    // Jika timestamp adalah objek Firestore dengan properti _seconds dan _nanoseconds
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

    // Jika timestamp adalah fungsi yang memiliki metode toDate()
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

    // Jika timestamp adalah angka (timestamp dalam milidetik)
    if (typeof timestamp === "number") {
      return new Date(timestamp);
    }

    // Jika timestamp adalah string yang dapat diubah menjadi Date
    if (typeof timestamp === "string") {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        return date;
      }
      console.warn("Invalid date string:", timestamp);
      return null;
    }

    // Jika format timestamp tidak dikenali
    console.warn("Unknown timestamp format:", timestamp);
    return null;
  } catch (error) {
    console.error("Error formatting timestamp:", error, timestamp);
    return null;
  }
};

// Helper function to get formatted string from timestamp
export const getFormattedTimestamp = (timestamp: Date | Timestamp | number | string): string => {
  const date = formatTimestamp(timestamp);
  if (!date) return 'No date';
  return date.toLocaleString();
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
          
          // Pastikan semua field yang diperlukan ada
          if (!data.username || !data.message || !data.userId) {
            console.error("Missing required fields in message:", data);
            return null;
          }

          // Pass the raw timestamp - let the component handle formatting
          return {
            id: doc.id,
            username: data.username,
            message: data.message,
            photo: data.photo || "/default-profile.png", // Default photo jika tidak ada
            timestamp: data.timestamp, // Don't modify it here
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
    // Return a no-op function in case of setup failure
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
      message: message.trim(),
      photo: photo,
      timestamp: serverTimestamp(), // Gunakan serverTimestamp() untuk timestamp
      userId: userId,
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