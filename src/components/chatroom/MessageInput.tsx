"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface MessageInputProps {
  isDarkMode: boolean;
  onSendMessage: (message: string) => Promise<void>;
  isSending: boolean;
}

const MessageInput = ({ isDarkMode, onSendMessage, isSending }: MessageInputProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = async () => {
    if (!newMessage.trim() || isSending) return;
    
    await onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="mt-6 flex items-center space-x-3">
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        className={`flex-1 p-3 rounded-lg transition-colors ${
          isDarkMode
            ? "bg-neutral-700 text-white placeholder-gray-400"
            : "bg-neutral-200 text-black placeholder-gray-600"
        }`}
        aria-label="Type your message"
      />
      <button
        onClick={handleSend}
        disabled={!newMessage.trim() || isSending}
        className={`p-3 rounded-lg transition-colors ${
          isDarkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        aria-label="Send message"
      >
        <FaPaperPlane className="text-lg" />
      </button>
    </div>
  );
};

export default MessageInput;