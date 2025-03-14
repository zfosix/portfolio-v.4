import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactElement;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 mx-1 bg-white dark:bg-neutral-900 rounded-full shadow-md">
      <div className="text-2xl">{icon}</div>
      <div className="font-medium">{name}</div>
    </div>
  );
};

export default SkillCard;