"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "@/context/DarkModeContext";
import Image from "next/image";
import { FaProjectDiagram, FaCertificate } from "react-icons/fa";
import { useState } from "react";
import { detailedProjects, certificates } from "@/data/resume"; 

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

function isProject(item: Project | Certificate): item is Project {
  return (item as Project).technologies !== undefined;
}

function isCertificate(item: Project | Certificate): item is Certificate {
  return (item as Certificate).issuedBy !== undefined;
}

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects"
  );

  // Gunakan detailedProjects dan certificates berdasarkan activeTab
  const displayedItems = activeTab === "projects" ? detailedProjects : certificates;

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
            {displayedItems.map((item) => {
              if (isProject(item)) {
                const project = item as Project;
                return (
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
                    } transition-all duration-300 border ${
                      isDarkMode ? "border-neutral-800" : "border-gray-200"
                    }`}
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
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
                );
              } else if (isCertificate(item)) {
                const certificate = item as Certificate;
                return (
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
                    } transition-all duration-300 border ${
                      isDarkMode ? "border-neutral-800" : "border-gray-200"
                    }`}
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2">{certificate.title}</h2>
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
                );
              }
              return null; // Fallback untuk tipe data yang tidak dikenali
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;