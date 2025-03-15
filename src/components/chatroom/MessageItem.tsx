"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaEllipsisV, FaSave, FaTimes } from "react-icons/fa";
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
  isLastMessage?: boolean;
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
  isLastMessage = false,
}: MessageItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const editInputRef = useRef<HTMLTextAreaElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const isOwner = currentUser && currentUser.uid === message.userId;

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      // Place cursor at the end of text
      const length = editInputRef.current.value.length;
      editInputRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Global style to hide ALL scrollbars */}
      <style jsx global>{`
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
      `}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex flex-row items-start group relative ${isLastMessage ? 'mb-8' : 'mb-4'}`}
      >
        {/* Profile Image */}
        <div className="flex-shrink-0 mr-3">
          <Image
            src={message.photo}
            alt={message.username}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-gray-300 object-cover"
          />
        </div>

        {/* Message Content */}
        <div className={`flex-1 overflow-hidden ${isOwner ? "pr-10" : ""}`}>
          <div className="flex items-center justify-between">
            {/* Username and Timestamp */}
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
          </div>

          {/* Edit Input or Message */}
          {isEditing ? (
            <div className="mt-1">
              <div className={`p-2 rounded-lg border ${
                isDarkMode 
                  ? "bg-neutral-800 border-neutral-700" 
                  : "bg-white border-gray-300"
              }`}>
                <textarea
                  ref={editInputRef}
                  value={editText}
                  onChange={(e) => onEditTextChange(e.target.value)}
                  className={`w-full resize-none px-2 py-1 rounded border-0 focus:ring-0 focus:outline-none ${
                    isDarkMode
                      ? "bg-neutral-800 text-white"
                      : "bg-white text-black"
                  }`}
                  rows={2}
                  aria-label="Edit message"
                />
                
                <div className="flex justify-end mt-2 space-x-2">
                  <button
                    onClick={onCancelEdit}
                    className={`px-3 py-1 rounded-md flex items-center space-x-1 text-xs font-medium ${
                      isDarkMode
                        ? "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    aria-label="Cancel edit"
                  >
                    <FaTimes size={12} />
                    <span>Cancel</span>
                  </button>
                  <button
                    onClick={onSaveEdit}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md flex items-center space-x-1 text-xs font-medium hover:bg-blue-700"
                    aria-label="Save changes"
                  >
                    <FaSave size={12} />
                    <span>Save</span>
                  </button>
                </div>
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

        {/* Action Menu Button - Now positioned absolutely */}
        {isOwner && !isEditing && (
          <div className="absolute right-0 top-0 z-20" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`p-1.5 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ${
                isDarkMode 
                  ? "text-gray-400 hover:text-white hover:bg-neutral-700" 
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-200"
              }`}
              aria-label="Toggle dropdown"
            >
              <FaEllipsisV className="text-sm" />
            </button>
            
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className={`absolute right-0 mt-1 w-36 rounded-lg shadow-lg z-30 ${
                  isDarkMode
                    ? "bg-neutral-800 border border-neutral-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <button
                  onClick={() => {
                    onEdit(message.id, message.userId);
                    setDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-sm flex items-center space-x-2 ${
                    isDarkMode 
                      ? "text-gray-200 hover:bg-neutral-700" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-label="Edit message"
                >
                  <FaEdit className={`${isDarkMode ? "text-blue-400" : "text-blue-500"}`} />
                  <span>Edit</span>
                </button>
                <div className={`mx-3 ${isDarkMode ? "border-t border-neutral-700" : "border-t border-gray-200"}`}></div>
                <button
                  onClick={() => {
                    onDelete(message.id, message.userId);
                    setDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-sm flex items-center space-x-2 ${
                    isDarkMode 
                      ? "text-red-400 hover:bg-neutral-700" 
                      : "text-red-500 hover:bg-gray-100"
                  }`}
                  aria-label="Delete message"
                >
                  <FaTrash />
                  <span>Delete</span>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default MessageItem;