"use client";

import Sidebar from "@/components/sidebar/menu";
import { motion } from "framer-motion";
import { RiRoadMapLine } from "react-icons/ri";
import { useDarkMode } from "@/context/DarkModeContext";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLink,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import Link from "next/link"; // Import Link dari next/link

type CategoryKey = "frontend" | "backend";

export default function RoadmapPage() {
  const { isDarkMode } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("frontend");

  const categories = {
    frontend: [
      {
        title: "HTML",
        // description: "Learn the basics of HTML.",
        icon: <FaHtml5 className="text-3xl text-orange-500" />,
        level: "Pemula (Beginner)",
        link: "https://example.com/html-tutorial",
      },
      {
        title: "CSS Dasar",
        // description: "Understand the fundamentals of CSS.",
        icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        level: "Pemula (Beginner)",
        link: "https://example.com/css-basic-tutorial",
      },
      {
        title: "CSS Layouting",
        // description: "Master CSS layout techniques.",
        icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/css-layout-tutorial",
      },
      {
        title: "CSS 3",
        // description: "Explore advanced CSS3 features.",
        icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/css3-tutorial",
      },
      {
        title: "Bootstrap",
        // description: "Learn to use Bootstrap for responsive design.",
        icon: <FaBootstrap className="text-3xl text-purple-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/bootstrap-tutorial",
      },
      {
        title: "Flexbox CSS",
        // description: "Understand Flexbox for layout design.",
        icon: <FaCss3Alt className="text-3xl text-blue-500" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/flexbox-tutorial",
      },
      {
        title: "Git & Github",
        // description: "Learn version control with Git and GitHub.",
        icon: <FaGitAlt className="text-3xl text-red-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/git-github-tutorial",
      },
      {
        title: "Tailwind CSS",
        // description: "Master utility-first CSS with Tailwind.",
        icon: <SiTailwindcss className="text-3xl text-teal-500" />,
        level: "Ahli (Expert)",
        link: "https://example.com/tailwind-tutorial",
      },
      {
        title: "Javascript Dasar",
        // description: "Learn the basics of JavaScript.",
        icon: <SiJavascript className="text-3xl text-yellow-500" />,
        level: "Pemula (Beginner)",
        link: "https://example.com/javascript-basic-tutorial",
      },
      {
        title: "Javascript DOM",
        // description: "Understand DOM manipulation with JavaScript.",
        icon: <SiJavascript className="text-3xl text-yellow-500" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/javascript-dom-tutorial",
      },
      {
        title: "Javascript Lanjutan",
        // description: "Explore advanced JavaScript concepts.",
        icon: <SiJavascript className="text-3xl text-yellow-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/javascript-advanced-tutorial",
      },
      {
        title: "React JS",
        // description: "Learn to build user interfaces with React.",
        icon: <FaReact className="text-3xl text-blue-500" />,
        level: "Ahli (Expert)",
        link: "https://example.com/react-tutorial",
      },
      {
        title: "Typescript",
        // description: "Understand TypeScript for type-safe code.",
        icon: <SiTypescript className="text-3xl text-blue-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/typescript-tutorial",
      },
      {
        title: "React Typescript",
        // description: "Combine React with TypeScript.",
        icon: <SiTypescript className="text-3xl text-blue-500" />,
        level: "Ahli (Expert)",
        link: "https://example.com/react-typescript-tutorial",
      },
      {
        title: "Next JS",
        // description: "Learn server-side rendering with Next.js.",
        icon: <SiNextdotjs className="text-3xl text-black dark:text-white" />,
        level: "Mastery/Spesialis",
        link: "https://example.com/nextjs-tutorial",
      },
    ],
    backend: [
      {
        title: "Node.js",
        // description: "Learn the basics of Node.js.",
        icon: <FaNodeJs className="text-3xl text-green-500" />,
        level: "Pemula (Beginner)",
        link: "https://example.com/nodejs-tutorial",
      },
      {
        title: "Express.js",
        // description: "Understand the fundamentals of Express.js.",
        icon: <SiExpress className="text-3xl text-black dark:text-white" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/expressjs-tutorial",
      },
      {
        title: "RESTful APIs",
        // description: "Master creating RESTful APIs.",
        icon: <FaDatabase className="text-3xl text-blue-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/restful-api-tutorial",
      },
      {
        title: "MongoDB",
        // description: "Learn to use MongoDB for database management.",
        icon: <SiMongodb className="text-3xl text-green-500" />,
        level: "Menengah (Intermediate)",
        link: "https://example.com/mongodb-tutorial",
      },
      {
        title: "SQL",
        // description: "Understand SQL for relational databases.",
        icon: <FaDatabase className="text-3xl text-blue-500" />,
        level: "Mahir (Advanced)",
        link: "https://example.com/sql-tutorial",
      },
      {
        title: "Authentication",
        // description: "Learn user authentication techniques.",
        icon: <FaDatabase className="text-3xl text-blue-500" />,
        level: "Ahli (Expert)",
        link: "https://example.com/authentication-tutorial",
      },
      {
        title: "Docker",
        // description: "Understand containerization with Docker.",
        icon: <SiDocker className="text-3xl text-blue-500" />,
        level: "Ahli (Expert)",
        link: "https://example.com/docker-tutorial",
      },
      {
        title: "GraphQL",
        // description: "Explore GraphQL for API development.",
        icon: <SiGraphql className="text-3xl text-pink-500" />,
        level: "Mastery/Spesialis",
        link: "https://example.com/graphql-tutorial",
      },
    ],
  };

 return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex-1 p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-start mb-8"
            >
              <div
                className={`border-b ${
                  isDarkMode ? "border-stone-700" : "border-stone-300"
                } border-dotted pb-4`}
              >
                <div className="flex items-center space-x-3">
                  <RiRoadMapLine
                    className={`text-3xl ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  />
                  <h1
                    className={`text-3xl font-bold ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  >
                    Roadmap
                  </h1>
                </div>
                <p
                  className={`mt-2 ${
                    isDarkMode ? "text-stone-400" : "text-gray-600"
                  }`}
                >
                  Learning path recommendation and free course playlist
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setActiveCategory("frontend")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === "frontend"
                      ? "bg-blue-950 text-white"
                      : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                >
                  Frontend Developer
                </button>
                <button
                  onClick={() => setActiveCategory("backend")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === "backend"
                      ? "bg-blue-950 text-white"
                      : "bg-gray-200 dark:bg-neutral-800 hover:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                >
                  Backend Developer
                </button>
              </div>

              {/* Animasi untuk konten kategori */}
              <motion.div
                key={activeCategory} // Key untuk memicu animasi ulang saat kategori berubah
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 gap-4">
                  {categories[activeCategory].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl shadow-md border border-neutral-700 transition-transform transform hover:scale-105 ${
                        isDarkMode
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 mb-1">
                          {item.icon}
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              item.level === "Pemula (Beginner)"
                                ? "bg-blue-500 text-white"
                                : item.level === "Menengah (Intermediate)"
                                ? "bg-green-500 text-white"
                                : item.level === "Mahir (Advanced)"
                                ? "bg-yellow-500 text-black"
                                : item.level === "Ahli (Expert)"
                                ? "bg-purple-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {item.level}
                          </span>
                        </div>
                        <FaLink className="text-xl text-gray-600 dark:text-gray-300" />
                      </div>
                      {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p> */}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
