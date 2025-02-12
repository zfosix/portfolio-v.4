"use client";
import { useEffect, useState, useRef } from "react";
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
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

interface Message {
  id: string;
  username: string;
  message: string;
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
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle automatic logout on page unload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user) {
        signOut(auth).catch(console.error);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [user]);

  // Subscribe to messages
  useEffect(() => {
    setIsLoading(true);
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedMessages: Message[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
          message: doc.data().message,
          timestamp: doc.data().timestamp,
        }));
        setMessages(fetchedMessages);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching messages: ", error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []); // Only run once on component mount

  // Handle auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous",
          email: currentUser.email || "",
          photo: currentUser.photoURL || "",
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!user || !newMessage.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        username: user.name,
        message: newMessage.trim(),
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
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
              <p className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Leave your impression or suggestion about this website here.
              </p>
            </div>
          </motion.div>

          {/* Login / Logout Section */}
          {user && (
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src={user.photo || "/default-profile.png"}
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-300"
                />
                <span className="font-medium">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
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
            } max-h-96 overflow-y-auto`}
          >
            {isLoading ? (
              <p className="text-center text-gray-500">Loading messages...</p>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
                <div key={msg.id} className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                    {msg.username[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{msg.username}</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No messages yet. Be the first to say something!
              </p>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Login with Google Button - Only show when not logged in */}
          {!user && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={loginWithGoogle}
                className={`flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg ${
                  isDarkMode
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-black border border-gray-300"
                }`}
              >
                <Image
                  src="/google.png"
                  alt="Google Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm">Login with Google to Chat</span>
              </button>
            </div>
          )}

          {/* Chat Input - Only show when logged in */}
          {user && (
            <div className="mt-6 flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`flex-1 p-3 rounded-lg ${
                  isDarkMode
                    ? "bg-neutral-700 text-white"
                    : "bg-neutral-200 text-black"
                }`}
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                } text-white ${!newMessage.trim() && "opacity-50 cursor-not-allowed"}`}
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