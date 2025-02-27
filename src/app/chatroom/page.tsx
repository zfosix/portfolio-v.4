// ChatroomPage.tsx
"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { db, auth, loginWithGoogle } from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  limit,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

// Import components
import ChatroomHeader from "@/components/chatroom/ChatroomHeader";
import UserProfile from "@/components/chatroom/UserProfile";
import MessagesList from "@/components/chatroom/MessagesList";
import MessageInput from "@/components/chatroom/MessageInput";
import LoginButton from "@/components/chatroom/LoginButton";

// Import types
import { Message, User } from "@/types/chatroom";

const ChatroomPage = () => {
  const { isDarkMode } = useDarkMode();
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageText, setEditMessageText] = useState("");
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Handle auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email || "",
          photo: currentUser.photoURL || "/default-profile.png",
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to messages
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "desc"), limit(100));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedMessages: Message[] = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            username: doc.data().username,
            message: doc.data().message,
            photo: doc.data().photo || "/default-profile.png",
            timestamp: doc.data().timestamp,
            userId: doc.data().userId,
          }))
          .reverse();

        setMessages(fetchedMessages);
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        console.error("Error fetching messages: ", error);
        setError("Failed to load messages. Please try again later.");
        setIsLoading(false);
      }
    );

    unsubscribeRef.current = unsubscribe;

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle message deletion
  const handleDeleteMessage = async (
    messageId: string,
    messageUserId: string
  ) => {
    if (!user || user.uid !== messageUserId) {
      toast.error("You can only delete your own messages");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "messages", messageId));
      toast.success("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message: ", error);
      toast.error("Failed to delete message");
    }
  };

  // Handle message editing
  const handleEditMessage = async (
    messageId: string,
    messageUserId: string
  ) => {
    if (!user || user.uid !== messageUserId) {
      toast.error("You can only edit your own messages");
      return;
    }

    const message = messages.find((msg) => msg.id === messageId);
    if (message) {
      setEditingMessageId(messageId);
      setEditMessageText(message.message);
    }
  };

  // Save edited message
  const handleSaveEdit = async () => {
    if (!editingMessageId || !editMessageText.trim()) return;

    try {
      const messageRef = doc(db, "messages", editingMessageId);
      await updateDoc(messageRef, {
        message: editMessageText.trim(),
      });
      setEditingMessageId(null);
      setEditMessageText("");
      toast.success("Message updated successfully");
    } catch (error) {
      console.error("Error updating message: ", error);
      toast.error("Failed to update message");
    }
  };

  // Handle sending a new message
  const handleSendMessage = useCallback(async (message: string) => {
    if (!user || !message.trim() || isSending) return;

    setIsSending(true);

    try {
      const messageData = {
        username: user.name,
        message: message.trim(),
        photo: user.photo,
        timestamp: serverTimestamp(),
        userId: user.uid,
      };

      await addDoc(collection(db, "messages"), messageData);
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }, [user, isSending]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header section */}
          <ChatroomHeader isDarkMode={isDarkMode} />

          {/* User Profile Section */}
          {user && <UserProfile user={user} handleLogout={handleLogout} />}

          {/* Chat Messages */}
          <div
            className={`rounded-xl p-6 border ${
              isDarkMode ? "border-neutral-800" : "border-neutral-200"
            } max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-none`}
          >
            <MessagesList
              messages={messages}
              currentUser={user}
              isDarkMode={isDarkMode}
              isLoading={isLoading}
              error={error}
              editingMessageId={editingMessageId}
              editMessageText={editMessageText}
              onEditMessage={handleEditMessage}
              onDeleteMessage={handleDeleteMessage}
              onEditTextChange={setEditMessageText}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={() => setEditingMessageId(null)}
            />
          </div>

          {/* Login Button */}
          {!user && (
            <LoginButton
              isDarkMode={isDarkMode}
              onLogin={handleLogin}
              isLoggingIn={isLoggingIn}
            />
          )}

          {/* Message Input */}
          {user && (
            <MessageInput
              isDarkMode={isDarkMode}
              onSendMessage={handleSendMessage}
              isSending={isSending}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default ChatroomPage;