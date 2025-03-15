"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import { IoMdContacts } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialCards from "@/components/contact/SocialCards";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
            <SocialCards />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;