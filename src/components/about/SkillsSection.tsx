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
    const feControls = useAnimation();
    const beControls = useAnimation();
    const feMarqueeRef = useRef<HTMLDivElement>(null);
    const beMarqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth !== null) {
            // Frontend skills marquee - from right to left (default)
            if (feMarqueeRef.current) {
                const feMarqueeWidth = feMarqueeRef.current.scrollWidth / 2;
                
                feControls.start({
                    x: [-feMarqueeWidth, 0],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: windowWidth < 768 ? 20 : 25,
                            ease: "linear",
                        },
                    },
                });
            }

            // Backend skills marquee - from left to right (opposite)
            if (beMarqueeRef.current) {
                const beMarqueeWidth = beMarqueeRef.current.scrollWidth / 2;
                
                beControls.start({
                    x: [0, -beMarqueeWidth],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: windowWidth < 768 ? 20 : 25,
                            ease: "linear",
                        },
                    },
                });
            }
        }
    }, [windowWidth, feControls, beControls]);

    const getCardWidthClass = () => {
        if (windowWidth === null) return "w-28 mx-0";
        if (windowWidth < 640) return "w-24 mx-0.5";
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
                className: `${windowWidth && windowWidth < 640 ? "text-sm" : "text-2xl"}`,
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

    // Frontend skills marquee content
    const renderFrontendSkills = () => {
        // Always use marquee for both mobile and desktop
        return (
            <motion.div
                ref={feMarqueeRef}
                className="flex gap-1 sm:gap-2"
                animate={feControls}
            >
                <div className="flex gap-1 sm:gap-2">
                    {frontendSkills.map((skill, index) => renderSkill(skill, index))}
                </div>
                <div className="flex gap-1 sm:gap-2">
                    {frontendSkills.map((skill, index) => renderSkill(skill, index, frontendSkills.length))}
                </div>
            </motion.div>
        );
    };

    // Backend skills marquee content
    const renderBackendSkills = () => {
        // Always use marquee for both mobile and desktop
        return (
            <motion.div
                ref={beMarqueeRef}
                className="flex gap-1 sm:gap-2"
                animate={beControls}
            >
                <div className="flex gap-1 sm:gap-2">
                    {backendSkills.map((skill, index) => renderSkill(skill, index))}
                </div>
                <div className="flex gap-1 sm:gap-2">
                    {backendSkills.map((skill, index) => renderSkill(skill, index, backendSkills.length))}
                </div>
            </motion.div>
        );
    };

    return (
        <section
            className={`border-b ${
                darkMode ? "border-stone-700" : "border-stone-300"
            } py-2 sm:py-6 w-full px-0.5 sm:px-0`}
        >
            <div className="flex items-center space-x-2 sm:space-x-3 px-0">
                <FaCode
                    className={`text-lg sm:text-2xl ${
                        darkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                />
                <h3
                    className={`text-base sm:text-xl font-bold ${
                        darkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                >
                    Skills
                </h3>
            </div>
            
            <p className={`mt-1 sm:mt-2 text-xs sm:text-sm md:text-base px-0 ${
                darkMode ? "text-stone-400" : "text-gray-600"
            }`}>
                My coding skills
            </p>

            <div className="mt-2 sm:mt-6 w-full px-0 space-y-2 sm:space-y-4">
                {/* Frontend Skills */}
                <div className="overflow-hidden">
                    {renderFrontendSkills()}
                </div>
                
                {/* Backend Skills */}
                <div className="overflow-hidden">
                    {renderBackendSkills()}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;