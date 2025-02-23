"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@heroui/react";
import {
  FaBriefcase,
  FaCode,
  FaTiktok as FaTiktokIcon,
  FaDownload,
  FaYoutube,
} from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import "@/styles/globals.css";
import { frontendSkills, backendSkills } from "@/data/resume";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import { TikTokAuth } from "@/components/about/TikTokAuth";
import { TikTokProfile } from "@/components/about/TikTokProfile";
import { useState, useEffect } from "react";
export default function AboutPage() {
  const { isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tiktok_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16 overflow-hidden">
        <div className="max-w-4xl w-full mx-auto">
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
                  className={`text-2xl md:text-3xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-gray-800"
                  }`}
                >
                  About
                </h1>
              </div>
              <p
                className={`mt-2 text-sm md:text-base ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                A short story of me
              </p>
            </div>
            <div
              className={`space-y-4 pt-3 text-sm md:text-base ${
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

            <div className="flex items-center justify-between mt-2">
              <p
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                My professional career journey
              </p>
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
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
              {/* Career Card with fixed design */}
              <Card
                className={`flex-1 w-full relative overflow-hidden ${
                  isDarkMode
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-neutral-100 border-neutral-200"
                } rounded-3xl`}
              >
                <div className="relative p-6 flex items-start space-x-4">
                  <div
                    className={`relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${
                      isDarkMode
                        ? "bg-neutral-800 border-neutral-700"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <Image
                      alt="SMK Wikrama Bogor"
                      layout="fill"
                      objectFit="cover"
                      src="/career/wikrama.png"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-stone-200" : "text-gray-800"
                      }`}
                    >
                      Frontend Developer
                    </h4>
                    <div
                      className={`flex items-center text-sm mt-1 ${
                        isDarkMode ? "text-stone-400" : "text-gray-600"
                      }`}
                    >
                      <span>SMK Wikrama Bogor</span>
                      <span className="mx-2">•</span>
                      <span>Bogor</span>
                    </div>
                    <div
                      className={`flex items-center text-sm mt-1 ${
                        isDarkMode ? "text-stone-500" : "text-gray-500"
                      }`}
                    >
                      <span>Jun 2022 - Present</span>
                      <span className="mx-2">•</span>
                      <span>~31 Months</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Second card with fixed design */}
              <Card
                className={`flex-1 w-full relative overflow-hidden ${
                  isDarkMode
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-neutral-100 border-neutral-200"
                } rounded-3xl`}
              >
                <div className="relative p-6 flex items-start space-x-4">
                  <div
                    className={`relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${
                      isDarkMode
                        ? "bg-neutral-800 border-neutral-700"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <Image
                      alt="PT Narantraya Teknologi Digital"
                      layout="fill"
                      objectFit="cover"
                      src="/career/narantraya.jpg"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-stone-200" : "text-gray-800"
                      }`}
                    >
                      Frontend Developer
                    </h4>
                    <div
                      className={`flex items-center text-sm mt-1 ${
                        isDarkMode ? "text-stone-400" : "text-gray-600"
                      }`}
                    >
                      <span>PT Narantraya Teknologi Digital</span>
                      <span className="mx-2">•</span>
                      <span>Jakarta</span>
                    </div>
                    <div
                      className={`flex items-center text-sm mt-1 ${
                        isDarkMode ? "text-stone-500" : "text-gray-500"
                      }`}
                    >
                      <span>Jan 2024 - Jun 2024</span>
                      <span className="mx-2">•</span>
                      <span>~6 Months</span>
                    </div>
                  </div>
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
              className={`mt-2 text-sm md:text-base ${
                isDarkMode ? "text-stone-400" : "text-gray-600"
              }`}
            >
              My coding skills
            </p>

            {/* Frontend Skills Marquee - Improved */}
            <div className="mt-6 relative w-full">
              <div className="absolute inset-0 pointer-events-none z-10">
                <div
                  className="h-full w-20 bg-gradient-to-r from-[#0B0A0A] to-transparent absolute left-0"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(to right, #0B0A0A, transparent)"
                      : "linear-gradient(to right, white, transparent)",
                  }}
                />
                <div
                  className="h-full w-20 bg-gradient-to-l from-[#0B0A0A] to-transparent absolute right-0"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(to left, #0B0A0A, transparent)"
                      : "linear-gradient(to left, white, transparent)",
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <Marquee
                  speed={isMobile ? 30 : 50}
                  gradient={false}
                  pauseOnHover={true}
                  className="py-2"
                >
                  <div className="flex">
                    {frontendSkills.map((skill, index) => (
                      <div
                        key={`frontend-${index}`}
                        className="flex items-center mx-2 p-2 px-4 rounded-full shadow-xl"
                        style={{
                          backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                          border: isDarkMode
                            ? "1px solid #3f3f3f"
                            : "1px solid #E5E7EB",
                        }}
                      >
                        {React.cloneElement(skill.icon, {
                          className: `${isMobile ? "text-xl" : "text-2xl"}`,
                        })}
                        <span
                          className={`${
                            isMobile ? "text-xs" : "text-sm"
                          } font-semibold ml-2 whitespace-nowrap ${
                            isDarkMode ? "text-stone-200" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* Backend Skills Marquee - Improved */}
            <div className="relative w-full">
              <div className="absolute inset-0 pointer-events-none z-10">
                <div
                  className="h-full w-20 bg-gradient-to-r from-[#0B0A0A] to-transparent absolute left-0"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(to right, #0B0A0A, transparent)"
                      : "linear-gradient(to right, white, transparent)",
                  }}
                />
                <div
                  className="h-full w-20 bg-gradient-to-l from-[#0B0A0A] to-transparent absolute right-0"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(to left, #0B0A0A, transparent)"
                      : "linear-gradient(to left, white, transparent)",
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <Marquee
                  speed={isMobile ? 30 : 50}
                  gradient={false}
                  direction="right"
                  pauseOnHover={true}
                  className="py-2"
                >
                  <div className="flex">
                    {backendSkills.map((skill, index) => (
                      <div
                        key={`backend-${index}`}
                        className="flex items-center mx-2 p-2 px-4 rounded-full shadow-xl"
                        style={{
                          backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
                          border: isDarkMode
                            ? "1px solid #3f3f3f"
                            : "1px solid #E5E7EB",
                        }}
                      >
                        {React.cloneElement(skill.icon, {
                          className: `${isMobile ? "text-xl" : "text-2xl"}`,
                        })}
                        <span
                          className={`${
                            isMobile ? "text-xs" : "text-sm"
                          } font-semibold ml-2 whitespace-nowrap ${
                            isDarkMode ? "text-stone-200" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </section>

          {/* Section 4: YouTube Channel */}
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
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                My channel YouTube on 2023
              </p>
              <div className="mt-4 w-full overflow-hidden">
                <div
                  className="relative"
                  style={{ paddingBottom: "56.25%", height: 0 }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/prViRqgo4BM?si=Smct-RKNDrVLY0G4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
              <p
                className={`mt-2 text-sm md:text-base ${
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
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-stone-400" : "text-gray-600"
                }`}
              >
                Find me on Tiktok
              </p>
            </div>
            <div className="container mx-auto p-4">
              {!isAuthenticated ? <TikTokAuth /> : <TikTokProfile />}
            </div>
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
