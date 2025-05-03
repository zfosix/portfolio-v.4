"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

emailjs.init("ZXrDuxiUPkMDDZYZV");

interface FormData {
    [key: string]: string;
    to: string;
    sendername: string;
    replyto: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState<FormData>({
    to: "fajarfauzian53@gmail.com",
    sendername: "",
    replyto: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Data yang dikirim:", formData);

    emailjs.send(
        "service_j59muzp",
        "template_5hx5nq1",
        formData as Record<string, unknown>
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({
            to: "fajarfauzian53@gmail.com",
            sendername: "",
            replyto: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          console.log("Error details:", err.response);
          toast.error("Failed to send the message, please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="space-y-8 pb-7">
      <h2 className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-neutral-400 to-neutral-600' : 'from-neutral-600 to-neutral-800'} bg-clip-text text-transparent`}>
        Send me a message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Container for Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender Name Input */}
          <div className="relative group">
            <input
              type="text"
              id="sendername"
              name="sendername"
              placeholder=" "
              value={formData.sendername}
              onChange={handleChange}
              className={`peer w-full px-4 py-3 rounded-lg border-2 ${
                isDarkMode 
                  ? 'border-neutral-700 bg-neutral-900 text-white focus:border-neutral-500' 
                  : 'border-neutral-300 bg-white text-neutral-900 focus:border-neutral-400'
              } focus:outline-none transition-all duration-300`}
            />
            <label
              htmlFor="sendername"
              className={`absolute left-4 -top-2.5 px-1 text-sm ${
                isDarkMode 
                  ? 'bg-neutral-900 text-neutral-400' 
                  : 'bg-white text-neutral-600'
              } transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm`}
            >
              Your Name
            </label>
          </div>

          {/* Reply Email Input */}
          <div className="relative group">
            <input
              type="email"
              id="replyto"
              name="replyto"
              placeholder=" "
              value={formData.replyto}
              onChange={handleChange}
              className={`peer w-full px-4 py-3 rounded-lg border-2 ${
                isDarkMode 
                  ? 'border-neutral-700 bg-neutral-900 text-white focus:border-neutral-500' 
                  : 'border-neutral-300 bg-white text-neutral-900 focus:border-neutral-400'
              } focus:outline-none transition-all duration-300`}
            />
            <label
              htmlFor="replyto"
              className={`absolute left-4 -top-2.5 px-1 text-sm ${
                isDarkMode 
                  ? 'bg-neutral-900 text-neutral-400' 
                  : 'bg-white text-neutral-600'
              } transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm`}
            >
              Your Email
            </label>
          </div>
        </div>

        {/* Subject Input */}
        <div className="relative group">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder=" "
            value={formData.subject}
            onChange={handleChange}
            className={`peer w-full px-4 py-3 rounded-lg border-2 ${
              isDarkMode 
                ? 'border-neutral-700 bg-neutral-900 text-white focus:border-neutral-500' 
                : 'border-neutral-300 bg-white text-neutral-900 focus:border-neutral-400'
            } focus:outline-none transition-all duration-300`}
          />
          <label
            htmlFor="subject"
            className={`absolute left-4 -top-2.5 px-1 text-sm ${
              isDarkMode 
                ? 'bg-neutral-900 text-neutral-400' 
                : 'bg-white text-neutral-600'
            } transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm`}
          >
            Subject
          </label>
        </div>

        {/* Message Input */}
        <div className="relative group">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            className={`peer w-full px-4 py-3 rounded-lg border-2 ${
              isDarkMode 
                ? 'border-neutral-700 bg-neutral-900 text-white focus:border-neutral-500' 
                : 'border-neutral-300 bg-white text-neutral-900 focus:border-neutral-400'
            } focus:outline-none transition-all duration-300 resize-none`}
          ></textarea>
          <label
            htmlFor="message"
            className={`absolute left-4 -top-2.5 px-1 text-sm ${
              isDarkMode 
                ? 'bg-neutral-900 text-neutral-400' 
                : 'bg-white text-neutral-600'
            } transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm`}
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-4 px-6 rounded-lg font-semibold transform hover:scale-[1.02] transition-all duration-300 
          focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg ${
            isDarkMode
              ? 'bg-gradient-to-r from-neutral-700 to-neutral-900 text-white hover:from-neutral-800 hover:to-neutral-950 focus:ring-neutral-700'
              : 'bg-gradient-to-r from-neutral-200 to-neutral-400 text-neutral-900 hover:from-neutral-300 hover:to-neutral-500 focus:ring-neutral-400'
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;