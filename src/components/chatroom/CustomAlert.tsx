// CustomAlert.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle, FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

interface CustomAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  type: "warning" | "delete" | "edit" | "success";
  isDarkMode: boolean;
}

const CustomAlert = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  type,
  isDarkMode,
}: CustomAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const getIconByType = () => {
    switch (type) {
      case "warning":
        return <FaExclamationTriangle className="text-yellow-500" size={24} />;
      case "delete":
        return <FaTrash className="text-red-500" size={24} />;
      case "edit":
        return <FaEdit className="text-blue-500" size={24} />;
      case "success":
        return <FaCheck className="text-green-500" size={24} />;
      default:
        return <FaExclamationTriangle className="text-yellow-500" size={24} />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "warning":
        return "yellow";
      case "delete":
        return "red";
      case "edit":
        return "blue";
      case "success":
        return "green";
      default:
        return "yellow";
    }
  };

  const color = getColor();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            onClick={onClose}
          >
            {/* Alert Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative w-full max-w-md p-6 rounded-lg shadow-xl z-50 ${
                isDarkMode
                  ? "bg-neutral-900 border border-neutral-800 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className={`absolute top-3 right-3 p-1 rounded-full ${
                  isDarkMode
                    ? "hover:bg-neutral-800 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
                }`}
                onClick={onClose}
              >
                <FaTimes size={16} />
              </button>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`p-3 rounded-full ${
                    isDarkMode
                      ? `bg-${color}-900 bg-opacity-30`
                      : `bg-${color}-100`
                  }`}
                >
                  {getIconByType()}
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>

              {/* Content */}
              <div
                className={`mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p>{message}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={onClose}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isDarkMode
                      ? "bg-neutral-800 text-white hover:bg-neutral-700"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors`}
                >
                  {cancelText}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`px-4 py-2 rounded-lg font-medium bg-${color}-600 text-white hover:bg-${color}-700 transition-colors`}
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomAlert;