// MessagesList.tsx
"use client";
import { useRef, useEffect } from "react";
import { Message, User } from "@/types/chatroom";
import MessageItem from "./MessageItem";

interface MessagesListProps {
  messages: Message[];
  currentUser: User | null;
  isDarkMode: boolean;
  isLoading: boolean;
  error: string | null;
  editingMessageId: string | null;
  editMessageText: string;
  onEditMessage: (messageId: string, messageUserId: string) => void;
  onDeleteMessage: (messageId: string, messageUserId: string) => void;
  onEditTextChange: (text: string) => void;
  onSaveEdit: () => Promise<void>;
  onCancelEdit: () => void;
}

const MessagesList = ({
  messages,
  currentUser,
  isDarkMode,
  isLoading,
  error,
  editingMessageId,
  editMessageText,
  onEditMessage,
  onDeleteMessage,
  onEditTextChange,
  onSaveEdit,
  onCancelEdit,
}: MessagesListProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
        <span className="ml-2">Loading messages...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-4">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-sm text-blue-500 hover:underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No messages yet. Be the first to say something!
      </p>
    );
  }

  return (
    <div className="overflow-y-auto p-4">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          currentUser={currentUser}
          isDarkMode={isDarkMode}
          onEdit={onEditMessage}
          onDelete={onDeleteMessage}
          isEditing={editingMessageId === message.id}
          editText={editingMessageId === message.id ? editMessageText : ""}
          onEditTextChange={onEditTextChange}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessagesList;