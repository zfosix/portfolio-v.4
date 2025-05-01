import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
// Import the career data with proper type
import { careerData } from "@/data/resume";
import {
  CareerSectionProps,
  CareerCardProps,
} from "@/types/career";


const CareerSection = ({ isDarkMode }: CareerSectionProps) => {
  return (
    <section
      className={`${isDarkMode ? "border-stone-700" : "border-stone-300"} py-8`}
    >
      <div className="flex items-center justify-between mb-6">
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

        <a
          href="https://drive.google.com/file/d/1ASjtYR4bd3-YmsUA3e2tlMlTa9e8Mlyd/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            isDarkMode
              ? "bg-neutral-800 text-stone-200 hover:bg-neutral-700"
              : "bg-neutral-100 text-blue-600 hover:bg-neutral-200"
          }`}
        >
          <FaDownload size={14} />
          <span>Download Resume</span>
        </a>
      </div>

      <p
        className={`text-sm md:text-base mb-6 ${
          isDarkMode ? "text-stone-400" : "text-gray-600"
        }`}
      >
        My professional career journey
      </p>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {careerData.map((career) => (
          <CareerCard 
            key={career.id}
            career={career}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};

// Career Card Component with proper typing
const CareerCard = ({ career, isDarkMode }: CareerCardProps) => {
  return (
    <div
      className={`flex-1 w-full relative overflow-hidden rounded-2xl transition-all hover:shadow-lg ${
        isDarkMode
          ? "bg-neutral-800 hover:bg-neutral-700 border border-neutral-700"
          : "bg-white hover:bg-neutral-50 border border-neutral-200"
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${career.gradientColors}`}></div>
      <div className="p-6">
        <div className="flex items-start">
          <div
            className={`relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 ${
              isDarkMode ? "border-neutral-700" : "border-neutral-200"
            }`}
          >
            <Image
              alt={career.company}
              src={career.logo}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="ml-4">
            <h4
              className={`text-lg font-semibold ${
                isDarkMode ? "text-stone-100" : "text-gray-800"
              }`}
            >
              {career.company}
            </h4>
            <div
              className={`flex items-center text-sm mt-2 ${
                isDarkMode ? "text-stone-300" : "text-gray-700"
              }`}
            >
              <span className="font-medium">
                {career.position}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-dashed flex flex-col space-y-2 text-sm">
          <div
            className={`flex items-center ${
              isDarkMode ? "text-stone-400" : "text-gray-600"
            }`}
          >
            <FaMapMarkerAlt className="mr-2 text-xs" />
            <span>{career.location}</span>
          </div>
          <div
            className={`flex items-center ${
              isDarkMode ? "text-stone-400" : "text-gray-600"
            }`}
          >
            <FaCalendarAlt className="mr-2 text-xs" />
            <span>{career.startDate} - {career.endDate}</span>
            <span className="mx-2">•</span>
            <span className="font-medium">{career.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;