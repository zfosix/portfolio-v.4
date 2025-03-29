"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  db,
  auth,
  loginWithGoogle,
  formatTimestamp as libFormatTimestamp,
} from "@/lib/firebaseConfig";
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
import { useRouter } from "next/navigation";

// Import components
import ChatroomHeader from "@/components/chatroom/ChatroomHeader";
import UserProfile from "@/components/chatroom/UserProfile";
import MessagesList from "@/components/chatroom/MessagesList";
import MessageInput from "@/components/chatroom/MessageInput";
import LoginButton from "@/components/chatroom/LoginButton";
import CustomAlert from "@/components/chatroom/CustomAlert";

// Import types
import { Message, User } from "@/types/chatroom";

const ChatroomPage = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editMessageText, setEditMessageText] = useState("");
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Maintenance mode state
  const [isUnderMaintenance] = useState(true);

  // Alert state
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "",
    cancelText: "Cancel",
    type: "warning" as "warning" | "delete" | "edit" | "success",
    onConfirm: () => {},
  });

  // Handle authentication state changes
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

  // Fetch messages from Firestore
  useEffect(() => {
    if (isUnderMaintenance) return;

    setIsLoading(true);
    setError(null);

    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "desc"), limit(100));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedMessages: Message[] = snapshot.docs
          .map((doc) => {
            const data = doc.data();

            // Use raw timestamp data - MessageItem will handle formatting
            return {
              id: doc.id,
              username: data.username,
              message: data.message,
              photo: data.photo || "/default-profile.png",
              timestamp: data.timestamp, // Keep as raw timestamp
              userId: data.userId,
            };
          })
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
  }, [isUnderMaintenance]);

  // Handle logout
  const handleLogout = async () => {
    if (isUnderMaintenance) return;

    setAlertConfig({
      isOpen: true,
      title: "Sign Out",
      message: "Are you sure you want to sign out from the chatroom?",
      confirmText: "Sign Out",
      cancelText: "Cancel",
      type: "warning",
      onConfirm: async () => {
        try {
          await signOut(auth);
          toast.success("Logged out successfully");
        } catch (error) {
          console.error("Logout error:", error);
          toast.error("Failed to logout. Please try again.");
        }
      },
    });
  };

  // Handle login with Google
  const handleLogin = async () => {
    if (isUnderMaintenance) return;

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
    if (isUnderMaintenance) return;
    if (!user || user.uid !== messageUserId) {
      toast.error("You can only delete your own messages");
      return;
    }

    setAlertConfig({
      isOpen: true,
      title: "Delete Message",
      message:
        "Are you sure you want to delete this message? This action cannot be undone.",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "delete",
      onConfirm: async () => {
        try {
          await deleteDoc(doc(db, "messages", messageId));
          toast.success("Message deleted successfully");
        } catch (error) {
          console.error("Error deleting message: ", error);
          toast.error("Failed to delete message");
        }
      },
    });
  };

  // Handle message editing
  const handleEditMessage = async (
    messageId: string,
    messageUserId: string
  ) => {
    if (isUnderMaintenance) return;
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
    if (isUnderMaintenance) return;
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
  const handleSendMessage = useCallback(
    async (message: string) => {
      if (isUnderMaintenance) return;
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
    },
    [user, isSending, isUnderMaintenance]
  );

  // Redirect to home page
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl mx-auto w-full relative">
          {/* Maintenance Banner */}
          {isUnderMaintenance && (
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md  ${
                isDarkMode ? "bg-black" : "bg-gray-100"
              }`}
            >
              <div
                className={`p-8 rounded-xl max-w-md text-center ${
                  isDarkMode
                    ? "bg-neutral-900 border border-neutral-700"
                    : "bg-white shadow-xl"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-16 w-16 ${
                      isDarkMode ? "text-yellow-400" : "text-yellow-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Sedang Dalam Perbaikan
                </h2>
                <p className="mb-4">
                  Halaman chatroom ini sedang dalam perbaikan. Mohon kembali
                  lagi nanti. Terima kasih atas pengertian Anda.
                </p>
                <p className="text-sm text-gray-500">Maintenance in progress</p>

                <button
                  onClick={redirectToHome}
                  className={`mt-6 px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-black"
                  }`}
                >
                  Continue Anyway (Home)
                </button>
              </div>
            </div>
          )}

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
              formatTimestamp={libFormatTimestamp}
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

      {/* Custom Alert Dialog */}
      <CustomAlert
        isOpen={alertConfig.isOpen}
        onClose={() => setAlertConfig({ ...alertConfig, isOpen: false })}
        onConfirm={alertConfig.onConfirm}
        title={alertConfig.title}
        message={alertConfig.message}
        confirmText={alertConfig.confirmText}
        cancelText={alertConfig.cancelText}
        type={alertConfig.type}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default ChatroomPage;
