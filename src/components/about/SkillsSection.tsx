"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import { frontendSkills, backendSkills } from "@/data/resume";

interface SkillsSectionProps {
    isDarkMode?: boolean;
    isMobile?: boolean;
}

const SkillsSection = ({ isDarkMode: propDarkMode }: SkillsSectionProps) => {
    const { isDarkMode: contextDarkMode } = useDarkMode();
    const darkMode = propDarkMode !== undefined ? propDarkMode : contextDarkMode;
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const controls = useAnimation();
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth !== null && marqueeRef.current) {
            const marqueeWidth = marqueeRef.current.scrollWidth / 2;
            const isMobileView = windowWidth < 640;

            controls.start({
                x: isMobileView ? 0 : [0, -marqueeWidth],
                transition: isMobileView
                    ? { duration: 0 }
                    : {
                          x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: windowWidth < 768 ? 15 : 20,
                              ease: "linear",
                          },
                      },
            });
        }
    }, [windowWidth, controls]);

    const getCardWidthClass = () => {
        if (windowWidth === null) return "w-full mx-0";
        if (windowWidth < 640) return "w-full mx-0.5";
        return "w-[calc(25%-8px)] mx-1 md:mx-2";
    };

    const renderSkill = (skill: (typeof frontendSkills)[0], index: number, offset: number = 0) => (
        <div
            key={`skill-${index}-${offset}`}
            className={`flex items-center ${getCardWidthClass()} p-1 px-2 rounded-full shadow-xl transition-all`}
            style={{
                backgroundColor: darkMode ? "#1E1E1E" : "#FFFFFF",
                border: darkMode ? "1px solid #3f3f3f" : "1px solid #E5E7EB",
            }}
        >
            {React.cloneElement(skill.icon, {
                className: `${windowWidth && windowWidth < 640 ? "text-xl" : "text-2xl"}`,
            })}
            <span
                className={`${
                    windowWidth && windowWidth < 640 ? "text-xs" : "text-sm"
                } font-semibold ml-1 whitespace-nowrap ${
                    darkMode ? "text-stone-200" : "text-gray-700"
                }`}
            >
                {skill.name}
            </span>
        </div>
    );

    const content =
        windowWidth === null || windowWidth < 640
            ? renderSkill(frontendSkills[0], 0)
            : [
                  frontendSkills.map((skill, index) => renderSkill(skill, index)),
                  backendSkills.map((skill, index) => renderSkill(skill, index, frontendSkills.length)),
              ];

    return (
        <section
            className={`border-b ${
                darkMode ? "border-stone-700" : "border-stone-300"
            } py-6 w-full`}
        >
            <div className="flex items-center space-x-3 px-2 sm:px-0">
                <FaCode
                    className={`text-2xl ${
                        darkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                />
                <h3
                    className={`text-xl font-bold ${
                        darkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                >
                    Skills
                </h3>
            </div>
            <p
                className={`mt-2 text-sm md:text-base px-2 sm:px-0 ${
                    darkMode ? "text-stone-400" : "text-gray-600"
                }`}
            >
                My coding skills
            </p>

            <div className="mt-6 overflow-hidden relative w-full px-2 sm:px-0">
                <motion.div
                    ref={marqueeRef}
                    className="flex gap-1 sm:gap-2"
                    animate={controls}
                >
                    {content}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;