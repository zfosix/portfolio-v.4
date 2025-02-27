import { ReactNode } from "react";

export interface SkillItem {
  icon: ReactNode;
  title: string;
  level: string;
  link: string;
}

export interface SkillCategories {
  frontend: SkillItem[];
  backend: SkillItem[];
  [key: string]: SkillItem[];
}