"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  MdOutlineSpaceDashboard,
  MdSpeed,
  MdCode,
  MdBarChart,
} from "react-icons/md";
import { useState } from "react";

const DashboardPage = () => {
  const { isDarkMode } = useDarkMode();
  const router = useRouter();
  
  // Maintenance mode state
  const [isUnderMaintenance] = useState(true);

  // Redirect to home page
  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      {/* Maintenance Overlay */}
      {isUnderMaintenance && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ${
            isDarkMode ? "bg-black" : "bg-gray-100"
          }`}
        >
          <div
            className={`p-8 rounded-xl max-w-md text-center ${
              isDarkMode
                ? "bg-neutral-900 border border-neutral-700"
                : "bg-white shadow-xl"
            }`}
          >
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-16 w-16 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Under Improvement</h2>
                <p className="mb-4">
                  This dashboard page is undergoing maintenance. Please come back
                  to again later. Thank you for your understanding.
                </p>
            <p className="text-sm text-gray-500">Maintenance in progress</p>

            <button
              onClick={redirectToHome}
              className={`mt-6 px-4 py-2 rounded-lg ${
                isDarkMode
                  ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
            >
              Continue Anyway (Home)
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
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
                <MdOutlineSpaceDashboard
                  className={`text-3xl ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                />
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  Dashboard
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                This is my personal dashboard, built with Next.js API routes
                deployed as serverless functions.
              </p>
            </div>
          </motion.div>

          {/* Pagespeed Insight Card */}
          <div
            className={`mb-6 p-6 rounded-lg ${
              isDarkMode ? "bg-neutral-800" : "bg-stone-100"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <MdSpeed
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h2
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Pagespeed Insight
              </h2>
            </div>
            <p
              className={`mb-4 ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My pagespeed index by google APIs
            </p>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Performance
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  61%
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Accessibility
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  95%
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Best Practices
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  100%
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  SEO
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  100%
                </p>
              </div>
            </div>
          </div>

          {/* Codewars Statistic Card */}
          <div
            className={`mb-6 p-6 rounded-lg ${
              isDarkMode ? "bg-neutral-800" : "bg-stone-100"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <MdCode
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h2
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Codewars Statistic
              </h2>
            </div>
            <p
              className={`mb-4 ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My statistic score on codewars
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Rank
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  5 kyu
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Honor
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  476
                </p>
              </div>
            </div>
          </div>

          {/* Contributions Card */}
          <div
            className={`mb-6 p-6 rounded-lg ${
              isDarkMode ? "bg-neutral-800" : "bg-stone-100"
            }`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <MdBarChart
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h2
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Contributions
              </h2>
            </div>
            <p
              className={`mb-4 ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My contributions from last year on github
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Total
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  432
                </p>
              </div>
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Best Day
                </p>
                <p
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  29
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;