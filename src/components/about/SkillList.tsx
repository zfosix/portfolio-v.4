import React from "react";
import SkillCard from "./SkillCard";
import MarqueeElement from "@/components/MarqueeElement";
import { SkillList } from "@/data/resume";

interface SkillsListProps {
  isDarkMode?: boolean;
  direction?: "left" | "right";
}

const SkillsList = ({ direction = "left" }: SkillsListProps) => {
  // Mengacak SkillList
  const shuffledSkills = [...SkillList].sort(() => Math.random() - 0.5);

  return (
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
  );
};

export default SkillsList;