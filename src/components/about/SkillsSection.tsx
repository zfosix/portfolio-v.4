import React from "react";
import { FaCode } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { frontendSkills, backendSkills } from "@/data/resume";
interface SkillsSectionProps {
    isDarkMode: boolean;
    isMobile: boolean;
  }
  const SkillsSection = ({ isDarkMode, isMobile }: SkillsSectionProps) => {
    return (
    <section
      className={`border-b ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } py-6`}
    >
      <div className="flex items-center space-x-3">
        <FaCode
          className={`text-2xl ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        />
        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-stone-200" : "text-gray-800"
          }`}
        >
          Skills
        </h3>
      </div>
      <p
        className={`mt-2 text-sm md:text-base ${
          isDarkMode ? "text-stone-400" : "text-gray-600"
        }`}
      >
        My coding skills
      </p>

      {/* Frontend Skills Marquee */}
      <div className="mt-6 relative w-full">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div
            className="h-full w-20 bg-gradient-to-r from-[#0B0A0A] to-transparent absolute left-0"
            style={{
              background: isDarkMode
                ? "linear-gradient(to right, #0B0A0A, transparent)"
                : "linear-gradient(to right, white, transparent)",
            }}
          />
          <div
            className="h-full w-20 bg-gradient-to-l from-[#0B0A0A] to-transparent absolute right-0"
            style={{
              background: isDarkMode
                ? "linear-gradient(to left, #0B0A0A, transparent)"
                : "linear-gradient(to left, white, transparent)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <Marquee
            speed={isMobile ? 30 : 50}
            gradient={false}
            pauseOnHover={true}
            className="py-2"
          >
            <div className="flex">
              {frontendSkills.map((skill, index) => (
                <div
                  key={`frontend-${index}`}
                  className="flex items-center mx-2 p-2 px-4 rounded-full shadow-xl"
                  style={{
                    backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                    border: isDarkMode
                      ? "1px solid #3f3f3f"
                      : "1px solid #E5E7EB",
                  }}
                >
                  {React.cloneElement(skill.icon, {
                    className: `${isMobile ? "text-xl" : "text-2xl"}`,
                  })}
                  <span
                    className={`${
                      isMobile ? "text-xs" : "text-sm"
                    } font-semibold ml-2 whitespace-nowrap ${
                      isDarkMode ? "text-stone-200" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Backend Skills Marquee */}
      <div className="relative w-full">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div
            className="h-full w-20 bg-gradient-to-r from-[#0B0A0A] to-transparent absolute left-0"
            style={{
              background: isDarkMode
                ? "linear-gradient(to right, #0B0A0A, transparent)"
                : "linear-gradient(to right, white, transparent)",
            }}
          />
          <div
            className="h-full w-20 bg-gradient-to-l from-[#0B0A0A] to-transparent absolute right-0"
            style={{
              background: isDarkMode
                ? "linear-gradient(to left, #0B0A0A, transparent)"
                : "linear-gradient(to left, white, transparent)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <Marquee
            speed={isMobile ? 30 : 50}
            gradient={false}
            direction="right"
            pauseOnHover={true}
            className="py-2"
          >
            <div className="flex">
              {backendSkills.map((skill, index) => (
                <div
                  key={`backend-${index}`}
                  className="flex items-center mx-2 p-2 px-4 rounded-full shadow-xl"
                  style={{
                    backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                    border: isDarkMode
                      ? "1px solid #3f3f3f"
                      : "1px solid #E5E7EB",
                  }}
                >
                  {React.cloneElement(skill.icon, {
                    className: `${isMobile ? "text-xl" : "text-2xl"}`,
                  })}
                  <span
                    className={`${
                      isMobile ? "text-xs" : "text-sm"
                    } font-semibold ml-2 whitespace-nowrap ${
                      isDarkMode ? "text-stone-200" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;