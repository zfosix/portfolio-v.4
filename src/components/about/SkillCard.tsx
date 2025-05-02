import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactElement;
  isMobile?: boolean;
}

const SkillCard = ({ name, icon, isMobile = false }: SkillCardProps) => {
  return (
    <div className={`flex items-center space-x-2 ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'} mx-1 bg-white dark:bg-neutral-900 rounded-full shadow-md`}>
      <div className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>{icon}</div>
      <div className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>{name}</div>
    </div>
  );
};

export default SkillCard;