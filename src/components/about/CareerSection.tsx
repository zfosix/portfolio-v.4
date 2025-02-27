import React from "react";
import Image from "next/image";
import { Card } from "@heroui/react";
import { FaBriefcase, FaDownload } from "react-icons/fa";

const CareerSection = ({ isDarkMode }: { isDarkMode: boolean }) => {  return (
    <section
      className={`border-b ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6`}
    >
      <div className="flex items-center space-x-3">
        <FaBriefcase
          className={`text-2xl ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        />
        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        >
          Career
        </h3>
      </div>

      <div className="flex items-center justify-between mt-2">
        <p
          className={`text-sm md:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          My professional career journey
        </p>
        <a
          href="https://drive.google.com/file/d/1f2xO5Wvr69sgknCjADti-JoWGrMJmbE6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex items-center space-x-2 ${
            isDarkMode
              ? "text-stone-300 hover:text-stone-100"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
        {/* Career Card with fixed design */}
        <Card
          className={`flex-1 w-full relative overflow-hidden ${
            isDarkMode
              ? "bg-neutral-900 border-neutral-700"
              : "bg-neutral-100 border-neutral-200"
          } rounded-3xl`}
        >
          <div className="relative p-6 flex items-start space-x-4">
            <div
              className={`relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${
                isDarkMode
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >
              <Image
                alt="SMK Wikrama Bogor"
                src="/career/wikrama.png"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h4
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Frontend Developer
              </h4>
              <div
                className={`flex items-center text-sm mt-1 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                <span>SMK Wikrama Bogor</span>
                <span className="mx-2">•</span>
                <span>Bogor</span>
              </div>
              <div
                className={`flex items-center text-sm mt-1 ${
                  isDarkMode ? "text-stone-500" : "text-gray-500"
                }`}
              >
                <span>Jun 2022 - Present</span>
                <span className="mx-2">•</span>
                <span>~31 Months</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Second card with fixed design */}
        <Card
          className={`flex-1 w-full relative overflow-hidden ${
            isDarkMode
              ? "bg-neutral-900 border-neutral-700"
              : "bg-neutral-100 border-neutral-200"
          } rounded-3xl`}
        >
          <div className="relative p-6 flex items-start space-x-4">
            <div
              className={`relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${
                isDarkMode
                  ? "bg-neutral-800 border-neutral-700"
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >
              <Image
                alt="PT Narantraya Teknologi Digital"
                src="/career/narantraya.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h4
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Frontend Developer
              </h4>
              <div
                className={`flex items-center text-sm mt-1 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                <span>PT Narantraya Teknologi Digital</span>
                <span className="mx-2">•</span>
                <span>Jakarta</span>
              </div>
              <div
                className={`flex items-center text-sm mt-1 ${
                  isDarkMode ? "text-stone-500" : "text-gray-500"
                }`}
              >
                <span>Jan 2024 - Jun 2024</span>
                <span className="mx-2">•</span>
                <span>~6 Months</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CareerSection;