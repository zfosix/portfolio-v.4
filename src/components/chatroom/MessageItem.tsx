// MessageItem.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import { Message, User } from "@/types/chatroom";
import { formatTimestamp } from "@/utils/chatroom";

interface MessageItemProps {
  message: Message;
  currentUser: User | null;
  isDarkMode: boolean;
  onEdit: (messageId: string, messageUserId: string) => void;
  onDelete: (messageId: string, messageUserId: string) => void;
  isEditing: boolean;
  editText: string;
  onEditTextChange: (text: string) => void;
  onSaveEdit: () => Promise<void>;
  onCancelEdit: () => void;
}

const MessageItem = ({
  message,
  currentUser,
  isDarkMode,
  onEdit,
  onDelete,
  isEditing,
  editText,
  onEditTextChange,
  onSaveEdit,
  onCancelEdit,
}: MessageItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const isOwner = currentUser && currentUser.uid === message.userId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-row items-start mb-4"
    >
      {/* Gambar Profil */}
      <div className="flex-shrink-0 mr-3">
        <Image
          src={message.photo}
          alt={message.username}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full border border-gray-300 object-cover"
        />
      </div>

      {/* Konten Pesan */}
      <div className="flex-1 w-full">
        <div className="flex items-center justify-between">
          {/* Username dan Timestamp */}
          <div className="flex items-center">
            <p className="font-semibold text-sm md:text-base">{message.username}</p>
            <span
              className={`ml-2 text-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {formatTimestamp(message.timestamp)}
            </span>
          </div>

          {/* Dropdown Menu untuk Pemilik Pesan */}
          {isOwner && (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <FaEllipsisV className="text-lg" />
              </button>
              {dropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg z-10 ${
                    isDarkMode
                      ? "bg-neutral-700 text-white"
                      : "bg-white text-black border border-gray-200"
                  }`}
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        onEdit(message.id, message.userId);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm flex items-center space-x-2 hover:bg-neutral-600"
                    >
                      <FaEdit className="text-sm" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        onDelete(message.id, message.userId);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm flex items-center space-x-2 hover:bg-neutral-600"
                    >
                      <FaTrash className="text-sm" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Edit atau Pesan */}
        {isEditing ? (
          <div className="flex flex-col md:flex-row items-center mt-1 space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => onEditTextChange(e.target.value)}
              className={`flex-1 w-full p-2 rounded ${
                isDarkMode
                  ? "bg-neutral-700 text-white"
                  : "bg-neutral-100 text-black"
              }`}
            />
            <div className="flex space-x-2">
              <button
                onClick={onSaveEdit}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={onCancelEdit}
                className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p
            className={`text-sm mt-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {message.message}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MessageItem;