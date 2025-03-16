// components/ChatRoom.tsx
"use client";

import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri"; // Import ikon Send

const ChatRoom = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-[450px] w-[270px] bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-3 bg-neutral-200 dark:bg-neutral-800">
        <h2 className="text-md font-semibold text-gray-800 dark:text-white">Chat Room</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-3 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="bg-white dark:bg-neutral-700 p-2 rounded-lg max-w-[80%]">
              <p className="text-sm text-gray-800 dark:text-white">{message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-neutral-200 dark:bg-neutral-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 rounded-lg bg-white dark:bg-neutral-700 text-sm text-gray-800 dark:text-white focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <RiSendPlaneFill className="w-5 h-5" /> {/* Ikon Send */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;