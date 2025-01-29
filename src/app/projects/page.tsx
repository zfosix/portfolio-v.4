"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import Image from "next/image";
import { FaProjectDiagram, FaCertificate } from "react-icons/fa";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface Certificate {
  id: number;
  title: string;
  description: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
}

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects"
  );

  const projects: Project[] = [
    {
      id: 1,
      title: "JokiGames & TopUpGames",
      description:
        "This is a website for game jockeys and top ups, equipped with many cool features.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"],
      image: "/projects/jokigames.png",
      link: "#",
    },
    {
      id: 2,
      title: "Ciu Isurannce",
      description:
        "Insurance bank handling application with attractive design and complete features.",
      technologies: ["Next.js","PostgreSQL", "Bootstrap", "Golang", "Node.js"],
      image: "/projects/ciudigital.png",
      link: "#",
    },
    // {
    //   id: 3,
    //   title: "AI-Powered Chatbot",
    //   description:
    //     "An AI chatbot integrated with natural language processing to provide customer support.",
    //   technologies: ["Python", "TensorFlow", "Flask"],
    //   image: "/images/chatbot.jpg",
    //   link: "#",
    // },
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   description:
    //     "A personal portfolio website showcasing projects, skills, and contact information.",
    //   technologies: ["React", "TypeScript", "Framer Motion"],
    //   image: "/images/portfolio.jpg",
    //   link: "#",
    // },
    // {
    //   id: 5,
    //   title: "Task Management App",
    //   description:
    //     "A task management application with drag-and-drop functionality and real-time updates.",
    //   technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    //   image: "/images/task-management.jpg",
    //   link: "#",
    // },
    // {
    //   id: 6,
    //   title: "Weather Forecast App",
    //   description:
    //     "A weather forecasting app that provides real-time weather updates and forecasts.",
    //   technologies: ["React Native", "OpenWeather API"],
    //   image: "/images/weather-app.jpg",
    //   link: "#",
    // },
    // {
    //   id: 7,
    //   title: "Blog Platform",
    //   description:
    //     "A blogging platform with markdown support, user authentication, and SEO optimization.",
    //   technologies: ["Next.js", "GraphQL", "Prisma"],
    //   image: "/images/blog-platform.jpg",
    //   link: "#",
    // },
    // {
    //   id: 8,
    //   title: "Fitness Tracker",
    //   description:
    //     "A fitness tracking app that logs workouts, tracks progress, and provides analytics.",
    //   technologies: ["Flutter", "Firebase", "Google Fit API"],
    //   image: "/images/fitness-tracker.jpg",
    //   link: "#",
    // },
  ];

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "PT NARANTRAYA TEKNOLOGI DIGITAL",
      description: "Telah menyelesaikan Praktik Kerja Industri",
      issuedBy: "PT Narantraya",
      date: "2024-07-21",
      image: "/certificates/pkl.png",
      link: "https://drive.google.com/file/d/1-91o_3jpjzmoUKd3mXWoFsixi5HwYR8G/view?usp=drive_link",
    },
    {
      id: 2,
      title: "IGDX Career Seminar",
      description: "Career Guidance For Aspiring Game Developer.",
      issuedBy: "IGDX Career",
      date: "2024-12-18",
      image: "/certificates/igdx.png",
      link: "https://drive.google.com/file/d/1H4aCas-yLXKmizrN3QaRJSN3az9B1KC_/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Front-End with VUE JS",
      description: "Front-end Development with The Progressive JavaScript Framework Vue.js",
      issuedBy: "Wanteknologi",
      date: "2023-10-30",
      image: "/certificates/vuejs.png",
      link: "https://drive.google.com/file/d/1BZ3ccpGrEE_2IZWN9KDVR7c1yPTVC-Fx/view?usp=drive_link",
    },
    {
      id: 4,
      title: "Back-End with JavaScript Framework",
      description: "Joining the Backend Development with Javascript Framework Training with PT.Laskar Teknologi Mulia (Cyberlabs).",
      issuedBy: "PT Laskar Teknologi Mulia",
      date: "2023-11-10",
      image: "/certificates/express.png",
      link: "https://drive.google.com/file/d/12W30fxT1vpU0nziuJVKOL38qBadhumrg/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Belajar Dasar AI",
      description: "Certification for completing the AI course Dicoding.",
      issuedBy: "Dicoding",
      date: "2024-11-30",
      image: "/certificates/dicai.png",
      link: "https://drive.google.com/file/d/1Q59lDUnG8LaOrxpwZ5RvG_SQCmEzvF_E/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      description: "Certification for completing the Frontend Web course Dicoding.",
      issuedBy: "Dicoding",
      date: "2023-11-24",
      image: "/certificates/dicfepml.png",
      link: "https://drive.google.com/file/d/1moE3wdslssz-TDvWTeP0tqq5URyqv9S5/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      description: "Certification for completing the AWS course Dicoding.",
      issuedBy: "Dicoding",
      date: "2023-11-25",
      image: "/certificates/dicaws.png",
      link: "https://drive.google.com/file/d/1i89m11ZocSTqaQk8AhiPsxFJ6HxYZ3xq/view?usp=drive_link",
    },
    {
      id: 8,
      title: "Belajar Dasar Pemrograman JavaScript",
      description: "Certification for completing the JS course Dicoding.",
      issuedBy: "Dicoding",
      date: "2025-01-24",
      image: "/certificates/dicjs.png",
      link: "https://drive.google.com/file/d/1D8sIA-4zFwJpjtkPoI_LbADspGeRBZzG/view?usp=drive_link",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
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
                {activeTab === "projects" ? (
                  <FaProjectDiagram
                    className={`text-3xl ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  />
                ) : (
                  <FaCertificate
                    className={`text-3xl ${
                      isDarkMode ? "text-stone-200" : "text-gray-800"
                    }`}
                  />
                )}
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  {activeTab === "projects" ? "Projects" : "Certificates"}
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                {activeTab === "projects"
                  ? "Showcasing my passion for technology, design, and problem-solving through code."
                  : "A collection of certifications that validate my skills and knowledge."}
              </p>
            </div>
          </motion.div>

          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "projects"
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-800"
              } transition-colors duration-300`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "certificates"
                  ? isDarkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-800"
              } transition-colors duration-300`}
            >
              Certificates
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTab === "projects"
              ? projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-xl overflow-hidden shadow-lg ${
                      isDarkMode
                        ? "bg-neutral-900 hover:bg-neutral-800"
                        : "bg-white hover:bg-gray-50"
                    } transition-all duration-300 border border-neutral-600 dark:border-neutral-800`}
                  >
                    <div className="w-full h-48 relative group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <a
                        href={project.link}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded-full ${
                              isDarkMode
                                ? "bg-gray-700 text-white"
                                : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))
              : certificates.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-xl overflow-hidden shadow-lg ${
                      isDarkMode
                        ? "bg-neutral-900 hover:bg-neutral-800"
                        : "bg-white hover:bg-gray-50"
                    } transition-all duration-300 border border-neutral-600 dark:border-neutral-800`}
                  >
                    <div className="w-full h-48 relative group">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <a
                        href={certificate.link}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="p-3">
                      <h2 className="text-xl font-bold mb-2">
                        {certificate.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {certificate.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            isDarkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          Issued by: {certificate.issuedBy}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            isDarkMode
                              ? "bg-gray-700 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          Date: {certificate.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
