import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "@/components/MarqueeElement";
import { SkillList } from "@/data/resume";
import { FaLaptopCode } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";

interface SkillsListProps {
  isDarkMode?: boolean;
  direction?: "left" | "right";
  isMobile: boolean;
}

const SkillsList = ({ direction = "left", isDarkMode = false }: SkillsListProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const shuffledSkills = [...SkillList].sort(() => Math.random() - 0.5);

  const getMarqueeConfig = () => {
    if (isSmallScreen) {
      return { rows: 2, speed: 35 };
    } else if (isMediumScreen) {
      return { rows: 3, speed: 30 };
    }
    return { rows: 4, speed: 25 };
  };

  const { speed } = getMarqueeConfig();

  return (
    <section className="flex flex-col space-y-4 w-full">
      <div className="flex items-center space-x-3">
        <FaLaptopCode
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
      <div className="flex items-center space-x-2 mt-2 sm:mt-4">
        <p
          className={`text-sm md:text-base mb-6 ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          My developed skills
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 w-full">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...shuffledSkills].sort(() => Math.random() - 0.5);
          const marqueeDirection = index % 2 === 0 ? direction : direction === "left" ? "right" : "left";

          return (
            <MarqueeElement
              key={index}
              direction={marqueeDirection}
              speed={speed}
              pauseOnHover={true}
              className="w-full py-1"
            >
              <div className="flex flex-nowrap gap-3 sm:gap-4 md:gap-6">
                {slider.map((skill, i) => (
                  <div className="flex-none" key={i}>
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      isMobile={isSmallScreen}
                    />
                  </div>
                ))}
              </div>
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsList;