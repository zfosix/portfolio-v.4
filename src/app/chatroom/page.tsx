"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import { db, auth, loginWithGoogle } from "@/lib/firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  limit,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

interface Message {
  id: string;
  username: string;
  message: string;
  photo: string;
  timestamp: Timestamp;
}

interface User {
  name: string;
  email: string;
  photo: string;
}

const ChatroomPage = () => {
  const { isDarkMode } = useDarkMode();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Handle auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email || "",
          photo: currentUser.photoURL || "/default-profile.png",
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to messages with error handling
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const messagesRef = collection(db, "messages");
    const q = query(
      messagesRef,
      orderBy("timestamp", "desc"),
      limit(100)
    );

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

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  // Handle sending a new message
  const handleSendMessage = useCallback(async () => {
    if (!user || !newMessage.trim() || isSending) return;

    setIsSending(true);

    try {
      const messageData = {
        username: user.name,
        message: newMessage.trim(),
        photo: user.photo,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "messages"), messageData);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }, [user, newMessage, isSending]);

  // Handle Enter key press for sending message
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  // Handle user logout
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

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-start mb-8"
          >
            <div
              className={`border-b ${
                isDarkMode ? "border-stone-700" : "border-stone-300"
              } border-dotted pb-4`}
            >
              <div className="flex items-center space-x-3">
                <IoChatbubbleEllipsesOutline
                  className={`text-3xl ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                />
                <h1 className="text-3xl font-bold">Chat Room</h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Leave your impression or suggestion about this website here.
              </p>
            </div>
          </motion.div>

          {/* User Profile Section */}
          {user && (
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src={user.photo}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300"
                  priority
                />
                <span className="font-medium">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-900 hover:bg-red-800 transition-colors text-white py-1 px-4 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div
            className={`rounded-xl p-6 border ${
              isDarkMode ? "border-neutral-800" : "border-neutral-200"
            } max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-none`}
          >
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
                <span className="ml-2">Loading messages...</span>
              </div>
            ) : error ? (
              <div className="text-center text-red-500 py-4">
                {error} <br />
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 text-sm text-blue-500 hover:underline"
                >
                  Try Again
                </button>
              </div>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-3 mb-4"
                >
                  <Image
                    src={msg.photo}
                    alt={msg.username}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-gray-300 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{msg.username}</p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {msg.message}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No messages yet. Be the first to say something!
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Login Button */}
          {!user && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={async () => {
                  setIsLoggingIn(true);
                  try {
                    await loginWithGoogle();
                  } catch (error) {
                    console.error("Login error:", error);
                    toast.error("Failed to login. Please try again.");
                  } finally {
                    setIsLoggingIn(false);
                  }
                }}
                className={`flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg transition-colors ${
                  isDarkMode
                    ? "bg-neutral-900 hover:bg-neutral-800 text-white"
                    : "bg-white hover:bg-gray-50 text-black border border-gray-300"
                }`}
                disabled={isLoggingIn}
              >
                <Image
                  src="/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  priority
                />
                <span className="text-sm">
                  {isLoggingIn ? "Logging in..." : "Login with Google to Chat"}
                </span>
              </button>
            </div>
          )}

          {/* Message Input */}
          {user && (
            <div className="mt-6 flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`flex-1 p-3 rounded-lg transition-colors ${
                  isDarkMode
                    ? "bg-neutral-700 text-white placeholder-gray-400"
                    : "bg-neutral-200 text-black placeholder-gray-600"
                }`}
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isSending}
                className={`p-3 rounded-lg transition-colors ${
                  isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                } text-white ${
                  (!newMessage.trim() || isSending) && "opacity-50 cursor-not-allowed"
                }`}
              >
                <FaPaperPlane />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChatroomPage;