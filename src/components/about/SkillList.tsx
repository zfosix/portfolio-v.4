import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "@/components/MarqueeElement";
import { SkillList } from "@/data/resume";
import { FaLaptopCode } from "react-icons/fa";

interface SkillsListProps {
  isDarkMode?: boolean;
  direction?: "left" | "right";
  isMobile: boolean; 
}

const SkillsList = ({ direction = "left", isDarkMode = false }: SkillsListProps) => {
  // Mengacak SkillList
  const shuffledSkills = [...SkillList].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col space-y-4">
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
      <div className="flex items-center space-x-2 mt-4">
        <p
          className={`text-sm md:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          My developed skills
        </p>
      </div>
      
      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...shuffledSkills].sort(() => Math.random() - 0.5);
          const marqueeDirection = index % 2 === 0 ? direction : direction === "left" ? "right" : "left";
          return (
            <MarqueeElement key={index} direction={marqueeDirection}>
              {slider.map((skill, i) => (
                <SkillCard key={i} name={skill.name} icon={skill.icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;