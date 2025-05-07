"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects } from "@/data/resume";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const { isDarkMode } = useDarkMode();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (params.slug) {
      const foundProject = detailedProjects.find(
        (p) => p.slug === params.slug
      );
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.image);
      }
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div
        className={`flex min-h-screen items-center justify-center ${
          isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
        }`}
      >
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className={`flex min-h-screen flex-col items-center justify-center p-4 ${
          isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Project Tidak Ditemukan</h1>
        <p className="mb-6 text-center">Maaf, project yang Anda cari tidak ditemukan.</p>
        <Link
          href="/projects"
          className={`px-4 sm:px-6 py-2 rounded-lg ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors text-sm sm:text-base`}
        >
          Kembali ke Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen pb-8 sm:pb-16 ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl w-full">
          <Link
            href="/projects"
            className={`inline-flex items-center mb-4 sm:mb-6 text-sm sm:text-base ${
              isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{project.title}</h1>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-contain rounded-2xl sm:rounded-3xl"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
                />
              </div>
              
              {project.gallery && project.gallery.length > 0 && (
                <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                  {project.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImage === img
                          ? isDarkMode
                            ? "border-blue-500"
                            : "border-blue-600"
                          : isDarkMode
                          ? "border-neutral-800"
                          : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover rounded-xl sm:rounded-2xl"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Deskripsi</h2>
                <p className="text-sm sm:text-base leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 ${
                  isDarkMode ? "bg-neutral-900" : "bg-gray-50"
                } border ${
                  isDarkMode ? "border-neutral-800" : "border-gray-200"
                }`}>
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Teknologi</h2>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                          isDarkMode
                            ? "bg-gray-800 text-gray-200 border border-gray-700"
                            : "bg-gray-100 text-gray-800 border border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 ${
                  isDarkMode ? "bg-neutral-900" : "bg-gray-50"
                } border ${
                  isDarkMode ? "border-neutral-800" : "border-gray-200"
                }`}>
                  {project.features && project.features.length > 0 && (
                    <>
                      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Fitur</h2>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 mt-0.5 ${
                                isDarkMode ? "text-blue-400" : "text-blue-500"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {project.link && project.link !== "#" && (
                <div className="flex justify-center pt-2 sm:pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white transition-colors`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
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
                    Lihat Project
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;