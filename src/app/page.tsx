"use client";
import Image from "next/image";
import Sidebar from "@/components/sidebar/menu";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "../styles/globals.css";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  FaCode,
  FaProjectDiagram,
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaSearch,
} from "react-icons/fa";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A]" : "bg-white"
      }`}
    >
      <Sidebar />
      <main className="flex-1 flex justify-center p-8 px-6 md:px-12 lg:px-24 ml-16">
        <div className="w-full max-w-4xl transition-all duration-500 ease-in-out">
          {/* Section 1: Introduction */}
          <section
            className={`flex flex-col text-start border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } pb-6`}
          >
            <h1
              className={`text-2xl font-bold mt-4 ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}
            >
              Hi, I&apos;m{" "}
              <span style={{ display: "inline-block" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Fajar Fauzian",
                      "Front-End Development",
                      "Web Development",
                      "UI/UX Design",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>
            <p className="text-lg mt-2 text-stone-500 text-sm">
              <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
              Students{" "}
              <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
              Based in Bogor 🇮🇩
            </p>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-stone-300" : "text-stone-700"
              }`}
            >
              I am a student at SMK Wikrama Bogor specializing in Frontend and
              Web Development, skilled in JavaScript, PHP, various frameworks,
              and passionate about UI/UX design and mobile app development using
              Flutter and Kotlin.
            </p>
          </section>

          {/* Section 2: Latest Articles */}
          <section
            className={`flex flex-col text-start border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex justify-between items-center">
              <div>
                {/* Judul dan Ikon */}
                <div className="flex items-center gap-2">
                  <FaCode
                    className={`text-xl ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  />
                  <h2
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  >
                    Recent Projects
                  </h2>
                </div>

                {/* Teks "course by dicoding.com" */}
                <p
                  className={`text-sm pt-2 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  course by dicoding.com
                </p>
              </div>

              {/* Tombol */}
              <Link href="https://www.dicoding.com/academies/my" passHref>
                <button
                  className={`px-2 py-2 rounded-lg text-sm flex items-center gap-2 ${
                    isDarkMode
                      ? "bg-neutral-900 text-stone-200"
                      : "bg-neutral-200 text-stone-800"
                  } hover:bg-neutral-600 hover:text-stone-100 transition-colors animate-glow`}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <title>Coding Ninjas</title>
                    <path
                      fill="currentColor"
                      d="M23.198 0c-.499.264-1.209.675-1.79.984a542.82 542.82 0 000 6.242c.995-.526 1.761-.834 1.79-2.066V0zM8.743.181C7.298.144 5.613.65 4.47 1.414c-1.17.8-1.987 1.869-2.572 3.179A16.787 16.787 0 00.9 8.87c-.15 1.483-.128 3.079.025 4.677.27 1.855.601 3.724 1.616 5.456 1.57 2.62 4.313 4.109 7.262 4.19 3.41.246 7.233.53 11.411.807.022-2.005.01-5.418 0-6.25-3.206-.21-7.398-.524-11.047-.782-.443-.043-.896-.056-1.324-.172-1.086-.295-1.806-.802-2.374-1.757-.643-1.107-.875-2.832-.797-4.294.11-1.27.287-2.41 1.244-3.44.669-.56 1.307-.758 2.161-.84 5.17.345 7.609.53 12.137.858.032-1.133.01-3.46 0-6.229C16.561.752 12.776.474 8.743.181zm-.281 9.7c.174.675.338 1.305.729 1.903.537.832 1.375 1.127 2.388.877.76-.196 1.581-.645 2.35-1.282zm12.974 1.04l-5.447.689c.799.739 1.552 1.368 2.548 1.703.988.319 1.78.01 2.308-.777.209-.329.56-1.148.591-1.614zm.842 6.461c-.388.01-.665.198-.87.355.002 1.798 0 4.127 0 6.223.586-.297 1.135-.644 1.793-.998-.005-1.454.002-3.137-.005-4.707a.904.904 0 00-.917-.873z"
                    />
                  </svg>
                  <span>Recent Projects from dicoding.com</span>
                </button>
              </Link>
              <style jsx>{`
                @keyframes glow {
                  0% {
                    box-shadow: 0 0 8px 2px rgba(255, 0, 0, 0.6);
                  }
                  33% {
                    box-shadow: 0 0 8px 2px rgba(0, 255, 0, 0.6);
                  }
                  66% {
                    box-shadow: 0 0 8px 2px rgba(0, 0, 255, 0.6);
                  }
                  100% {
                    box-shadow: 0 0 8px 2px rgba(255, 0, 0, 0.6);
                  }
                }

                .animate-glow {
                  animation: glow 3s infinite;
                }
              `}</style>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div
                className={`p-2 rounded-xl ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="relative w-full h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/studycourse/ai.png"
                    alt="Article 1"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                  />
                </div>
                <h3
                  className={`font-bold mt-4 ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}
                >
                  Mux data integration for Expo
                </h3>
                <p
                  className={`text-xs mt-2 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  Started on: 2023-10-01
                </p>
              </div>
              <div
                className={`p-2 rounded-xl ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="relative w-full h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/studycourse/android.png"
                    alt="Article 2"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                  />
                </div>
                <h3
                  className={`font-bold mt-4 ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}
                >
                  State - Next Js App Directory
                </h3>
                <p
                  className={`text-xs mt-2 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  Started on: 2023-09-15
                </p>
              </div>
              <div
                className={`p-2 rounded-xl ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="relative w-full h-28 rounded-lg overflow-hidden">
                  <Image
                    src="/studycourse/kotlin.png"
                    alt="Article 3"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                  />
                </div>
                <h3
                  className={`font-bold mt-4 ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}
                >
                  Props and State
                </h3>
                <p
                  className={`text-xs mt-2 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  Started on: 2023-08-20
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Services */}
          <section
            className={`flex flex-col text-start border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex items-center gap-2">
              <FaProjectDiagram
                className={`text-xl ${
                  isDarkMode ? "text-stone-200" : "text-stone-800"
                }`}
              />
              <h2
                className={`text-xl font-bold ${
                  isDarkMode ? "text-stone-200" : "text-stone-800"
                }`}
              >
                Services
              </h2>
            </div>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-stone-300" : "text-stone-700"
              }`}
            >
              I can deliver the following services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaGlobe
                    className={`text-xl ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  />
                  <h3
                    className={`font-bold ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  >
                    Website Development
                  </h3>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  Create stunning, user-friendly fullstack web applications
                  using modern technologies.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaMobileAlt
                    className={`text-xl ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  />
                  <h3
                    className={`font-bold ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  >
                    Mobile Development
                  </h3>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  Create smooth and cross-platform mobile applications using
                  React Native.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaChartLine
                    className={`text-xl ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  />
                  <h3
                    className={`font-bold ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  >
                    Analytic Integration
                  </h3>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  Implement Google Tag Manager, Google Analytics, and Mixpanel
                  for data-driven insights.
                </p>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaSearch
                    className={`text-xl ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  />
                  <h3
                    className={`font-bold ${
                      isDarkMode ? "text-stone-200" : "text-stone-800"
                    }`}
                  >
                    Search Engine Optimization
                  </h3>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  Improve Search Engine Optimization and web performance.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
