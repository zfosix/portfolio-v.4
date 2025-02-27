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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Or send me a message</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Container for Name and Email */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sender Name Input */}
          <div className="flex-1">
            <label
              htmlFor="sendername"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-stone-300" : "text-gray-700"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="sendername"
              name="sendername"
              placeholder="Enter your name"
              value={formData.sendername}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode
                  ? "border-neutral-800 bg-neutral-950 text-stone-200"
                  : "border-gray-300 bg-white text-gray-800"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>

          {/* Reply Email Input */}
          <div className="flex-1">
            <label
              htmlFor="replyto"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-stone-300" : "text-gray-700"
              }`}
            >
              Your Email
            </label>
            <input
              type="email"
              id="replyto"
              name="replyto"
              placeholder="Enter your email"
              value={formData.replyto}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isDarkMode
                  ? "border-neutral-800 bg-neutral-950 text-stone-200"
                  : "border-gray-300 bg-white text-gray-800"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
        </div>

        {/* Subject Input */}
        <div>
          <label
            htmlFor="subject"
            className={`block text-sm font-medium ${
              isDarkMode ? "text-stone-300" : "text-gray-700"
            }`}
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              isDarkMode
                ? "border-neutral-800 bg-neutral-950 text-stone-200"
                : "border-gray-300 bg-white text-gray-800"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
        </div>

        {/* Message Input */}
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
            name="message"
            rows={4}
            placeholder="Send your message"
            value={formData.message}
            onChange={handleChange}
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
  );
};

export default ContactForm;