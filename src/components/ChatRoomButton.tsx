// components/ChatRoomButton.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { PiChatCircleDotsFill } from "react-icons/pi";
import ChatRoom from "@/components/ChatRoom";

const ChatRoomButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chatRoomRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (chatRoomRef.current && !chatRoomRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-neutral-400 dark:bg-neutral-700 text-white p-3 rounded-full shadow-lg hover:bg-neutral-700 transition-colors"
      >
        <PiChatCircleDotsFill className="w-7 h-7" />
      </button>

      {isOpen && (
        <div ref={chatRoomRef} className="absolute bottom-14 right-0">
          <ChatRoom />
        </div>
      )}
    </div>
  );
};

export default ChatRoomButton;