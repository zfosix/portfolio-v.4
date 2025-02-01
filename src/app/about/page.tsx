"use client";
import Image from "next/image";
import { Card } from "@heroui/react";
import {
  FaBriefcase,
  FaCode,
  FaGithubAlt,
  FaTiktok as FaTiktokIcon,
  FaBootstrap,
  FaJava,
  FaDownload,
} from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  FaYoutube,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiGraphql,
  SiReactquery,
  SiGulp,
  SiPrisma,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { isDarkMode } = useDarkMode();

  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-2xl text-purple-600" /> },
    { name: "SASS", icon: <FaSass className="text-2xl text-pink-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-2xl text-black dark:text-white" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-2xl text-purple-600" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-2xl text-blue-400" />,
    },
    { name: "Figma", icon: <FaFigma className="text-2xl text-purple-500" /> },
    {
      name: "React Query",
      icon: <SiReactquery className="text-2xl text-red-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-2xl text-blue-600" />,
    },
  ];
  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-2xl text-gray-500" />,
    },
    { name: "Laravel", icon: <SiLaravel className="text-2xl text-red-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-2xl text-blue-800" />,
    },
    { name: "Java", icon: <FaJava className="text-2xl text-red-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-2xl text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithubAlt className="text-2xl text-gray-700" />,
    },
    { name: "GitLab", icon: <FaGitlab className="text-2xl text-orange-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-2xl text-teal-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-2xl text-pink-500" /> },
    { name: "Gulp", icon: <SiGulp className="text-2xl text-red-600" /> },
  ];

  const frontendInfinite = [...frontendSkills, ...frontendSkills];
  const backendInfinite = [...backendSkills, ...backendSkills];

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Section 1: Introduction */}
          <section
            className={`border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } pb-6`}
          >
            <div
              className={`border-b ${
                isDarkMode ? "border-stone-700" : "border-stone-300"
              } border-dotted pb-4`}
            >
              <div className="flex items-center space-x-3">
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  About
                </h1>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                A short story of me
              </p>
            </div>
            <div
              className={`space-y-4 pt-3 ${
                isDarkMode ? "text-stone-300" : "text-gray-700"
              }`}
            >
              <p>
                Hi! I am Fajar Fauzian, a student at SMK Wikrama Bogor majoring
                in Software and Game Development, specializing in Frontend and
                Web Development. I have developed strong skills in JavaScript,
                PHP, and various frameworks such as Vue.js, React.js, Next.js,
                and Laravel, allowing me to build innovative and user-friendly
                web applications.
              </p>
              <p>
                In addition to web development, I am highly interested in
                designing UI/UX for mobile applications. I focus on creating
                simple yet functional designs that enhance user experience while
                maintaining visual appeal. This interest motivates me to
                continuously explore creative approaches to design challenges.
              </p>
              <p>
                To further expand my expertise, I am eager to dive into mobile
                app development using Flutter and Kotlin. By mastering these
                technologies, I aim to strengthen my skills and contribute to
                building versatile applications across different platforms.
              </p>
              <p>
                Thank you for visiting, and I look forward to embarking on this
                knowledge-sharing adventure.
              </p>
            </div>
          </section>

          {/* Section 2: Career */}
          <section
            className={`border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            {/* Header Section */}
            <div className="flex items-center space-x-3">
              <FaBriefcase
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Career
              </h3>
            </div>

            {/* Deskripsi Section dengan Link Download Resume */}
            <div className="flex items-center justify-between mt-2">
              <p
                className={`${isDarkMode ? "text-stone-400" : "text-gray-600"}`}
              >
                My professional career journey
              </p>
              {/* Link Download Resume dengan Ikon */}
              <a
                href="https://drive.google.com/file/d/1f2xO5Wvr69sgknCjADti-JoWGrMJmbE6/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm flex items-center space-x-2 ${
                  isDarkMode
                    ? "text-stone-300 hover:text-stone-100"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <FaDownload /> {/* Ikon Download */}
                <span>Download Resume</span>
              </a>
            </div>

            {/* Card Section */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              {/* Card 1: SMK Wikrama Bogor */}
              <Card
                className="flex-1 rounded-xl p-4"
                style={{
                  border: isDarkMode
                    ? "1px solid #3f3f3f"
                    : "1px solid #E5E7EB",
                  height: "100%",
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#F9FAFB",
                }}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    alt="SMK Wikrama Bogor"
                    height={50}
                    width={50}
                    src="/career/wikrama.png"
                    className="rounded-full"
                  />
                  <div>
                    <p
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-stone-200" : "text-gray-800"
                      }`}
                    >
                      Frontend Developer
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-stone-400" : "text-gray-600"
                      }`}
                    >
                      SMK Wikrama Bogor
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-400" : "text-gray-600"
                    }`}
                  >
                    Front-End Design - UI UX Design
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-400" : "text-gray-600"
                    }`}
                  >
                    Jun 2022 - Present · ~ 31 Months
                  </p>
                </div>
              </Card>

              {/* Card 2: PT Narantraya Teknologi Digital */}
              <Card
                className="flex-1 rounded-xl p-4"
                style={{
                  border: isDarkMode
                    ? "1px solid #3f3f3f"
                    : "1px solid #E5E7EB",
                  height: "100%",
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#F9FAFB",
                }}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    alt="PT Narantraya Teknologi Digital"
                    height={50}
                    width={50}
                    src="/career/narantraya.jpg"
                    className="rounded-full"
                  />
                  <div>
                    <p
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-stone-200" : "text-gray-800"
                      }`}
                    >
                      Frontend Developer
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-stone-400" : "text-gray-600"
                      }`}
                    >
                      PT Narantraya Teknologi Digital
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-400" : "text-gray-600"
                    }`}
                  >
                    Front-End Development - UI Design
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-stone-400" : "text-gray-600"
                    }`}
                  >
                    Jan 2024 - Jun 2024 · ~ 6 Months
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 3: Skills */}
          <section
            className={`border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex items-center space-x-3">
              <FaCode
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Skills
              </h3>
            </div>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My coding skills
            </p>

            {/* Frontend Skills Marquee */}
            <div className="relative mt-6 overflow-hidden">
              <motion.div
                className="flex space-x-3 whitespace-nowrap"
                animate={{
                  x: [0, -100 * frontendSkills.length],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: "fit-content",
                }}
              >
                {frontendInfinite.map((skill, index) => (
                  <div
                    key={`frontend-${index}`}
                    className="flex flex-row items-center justify-start p-2 px-4 rounded-full shadow-xl"
                    style={{
                      backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                      border: isDarkMode
                        ? "1px solid #3f3f3f"
                        : "1px solid #E5E7EB",
                    }}
                  >
                    <div className="flex-shrink-0">{skill.icon}</div>
                    <h4
                      className={`text-xs font-semibold ml-2 ${
                        isDarkMode ? "text-stone-200" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Backend Skills Marquee */}
            <div className="relative mt-6 overflow-hidden">
              <motion.div
                className="flex space-x-3 whitespace-nowrap"
                animate={{
                  x: [-100 * backendSkills.length, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: "fit-content",
                }}
              >
                {backendInfinite.map((skill, index) => (
                  <div
                    key={`backend-${index}`}
                    className="flex flex-row items-center justify-start p-2 px-4 rounded-full shadow-xl"
                    style={{
                      backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                      border: isDarkMode
                        ? "1px solid #3f3f3f"
                        : "1px solid #E5E7EB",
                    }}
                  >
                    <div className="flex-shrink-0">{skill.icon}</div>
                    <h4
                      className={`text-xs font-semibold ml-2 ${
                        isDarkMode ? "text-stone-200" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Section 4: Github Unwrapped */}
          <section
            className={`border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex items-center space-x-3">
              <FaYoutube
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                YouTube Channel
              </h3>
            </div>
            <div
              className="p-4 rounded-lg shadow-md mt-4"
              style={{ backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF" }}
            >
              <p
                className={`${isDarkMode ? "text-stone-400" : "text-gray-600"}`}
              >
                My channel YouTube on 2023
              </p>
              {/* Embed YouTube Video */}
              <div className="mt-4 w-full">
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/XHb0alogjv0?si=frjsyDSxz0iNcqg2"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-stone-300" : "text-gray-700"
                }`}
              >
                THANKS 2024!! THIS IS MY #youtubechannel
              </p>
            </div>
          </section>

          {/* Section 5: Tiktok */}
          <section className="py-6">
            <div className="flex items-center space-x-3">
              <FaTiktokIcon
                className={`text-2xl ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              />
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-gray-800"
                }`}
              >
                Tiktok
              </h3>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <p
                className={`${isDarkMode ? "text-stone-400" : "text-gray-600"}`}
              >
                Find me on Tiktok
              </p>
            </div>
            {/* Link TikTok dan Tautan Tambahan */}
            <div className="mt-2 flex justify-between items-center">
              <a
                href="https://www.tiktok.com/@zfosix"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${
                  isDarkMode
                    ? "text-stone-300 hover:text-stone-100"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                @zfosix
              </a>
              <a
                href="https://www.instagram.com/zfosix/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${
                  isDarkMode
                    ? "text-stone-300 hover:text-stone-100"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                zfosix
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}