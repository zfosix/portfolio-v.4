"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import { IoMdContacts } from "react-icons/io";
import { FaGithub, FaLinkedin, FaSpotify, FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ContactPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24">
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
                <IoMdContacts
                  className={`text-3xl ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                />
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  Contact
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                Let&rsquo;s get in touch
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* 4 Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* GitHub Card */}
              <div className="flex items-center space-x-4 border bg-slate-300 border-gray-800 dark:bg-slate-950 rounded-lg p-4">
                <FaGithub className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">Explore the code</h2>
                  <p className="text-gray-500">
                    Explore the source code for all my projects on GitHub.
                  </p>
                  <button
                    onClick={() => window.open("https://github.com", "_blank")}
                    className="mt-2 bg-gray-800 text-white py-1 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center"
                  >
                    Go to GitHub
                    <FiExternalLink className="ml-2" />
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="flex items-center space-x-4 border bg-blue-300 border-blue-600 dark:bg-blue-950 rounded-lg p-4">
                <FaLinkedin className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">Let&rsquo;s connect</h2>
                  <p className="text-gray-500">
                    Connect for collaboration or explore my professional
                    experience.
                  </p>
                  <button
                    onClick={() =>
                      window.open("https://linkedin.com", "_blank")
                    }
                    className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
                  >
                    Go to LinkedIn
                    <FiExternalLink className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Spotify Card */}
              <div className="flex items-center space-x-4 border bg-green-300 border-green-600 dark:bg-green-950 rounded-lg p-4">
                <FaSpotify className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">
                    Listen to my playlist
                  </h2>
                  <p className="text-gray-500">
                    Check out my favorite tracks and playlists on Spotify.
                  </p>
                  <button
                    onClick={() => window.open("https://spotify.com", "_blank")}
                    className="mt-2 bg-green-600 text-white py-1 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
                  >
                    Go to Spotify
                    <FiExternalLink className="ml-2" />
                  </button>
                </div>
              </div>

              {/* Discord Card */}
              <div className="flex items-center space-x-4 border bg-violet-300 border-violet-600 dark:bg-violet-950 rounded-lg p-4">
                <FaDiscord className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">
                    Chat with the community
                  </h2>
                  <p className="text-gray-500">
                    Join over 1,000+ other developers on The Code Bayu Discord.
                  </p>
                  <button
                    onClick={() => window.open("https://discord.com", "_blank")}
                    className="mt-2 bg-violet-600 text-white py-1 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 flex items-center"
                  >
                    Go to Discord
                    <FiExternalLink className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Or send me a message</h2>
              <form className="space-y-4">
                {/* Container untuk Name dan Email */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Input Name */}
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-stone-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className={`mt-1 block w-full px-3 py-2 border ${
                        isDarkMode
                          ? "border-neutral-800 bg-neutral-950 text-stone-200"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                  </div>

                  {/* Input Email */}
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDarkMode ? "text-stone-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className={`mt-1 block w-full px-3 py-2 border ${
                        isDarkMode
                          ? "border-neutral-800 bg-neutral-950 text-stone-200"
                          : "border-gray-300 bg-white text-gray-800"
                      } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                  </div>
                </div>

                {/* Input Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      isDarkMode ? "text-stone-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Send your message"
                    className={`mt-1 block w-full px-3 py-2 border ${
                      isDarkMode
                        ? "border-neutral-800 bg-neutral-950 text-stone-200"
                        : "border-gray-300 bg-white text-gray-800"
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
