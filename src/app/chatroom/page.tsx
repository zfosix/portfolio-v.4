"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import Sidebar from "@/components/sidebar/menu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";

const ChatroomPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
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
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  Chat Room
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                Leave your impression or suggestion about this website here{" "}
              </p>
            </div>
          </motion.div>

          {/* Chat Messages Section */}
          <div
            className={`rounded-xl p-6 border border-neutral-800`}
            style={{ 
              maxHeight: '400px', 
              overflowY: 'auto',
              scrollbarWidth: 'none', // Untuk Firefox
              msOverflowStyle: 'none', // Untuk IE dan Edge
            }}
          >
            {/* Menambahkan CSS untuk menyembunyikan scrollbar di WebKit (Chrome, Safari) */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="space-y-4">
              {/* Example Chat Messages */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  K
                </div>
                <div>
                  <p className="font-semibold">Kevin Satira Darmawan</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    halo gays
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  R
                </div>
                <div>
                  <p className="font-semibold">Ramdanz Zoldyck</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    kepin
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold">Muhamad Hakkal</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    assalamualaikum gesssi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold">Muhamad Hakkal</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    assalamualaikum gesssi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold">Muhamad Hakkal</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    assalamualaikum gesssi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold">Muhamad Hakkal</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    assalamualaikum gesssi
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold">Muhamad Hakkal</p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    assalamualaikum gesssi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input Section */}
          <div className="mt-6">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className={`flex-1 p-3 rounded-lg ${
                  isDarkMode
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200 text-black"
                }`}
              />
              <button
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                } text-white`}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatroomPage;