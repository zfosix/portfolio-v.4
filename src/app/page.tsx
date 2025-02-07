"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "../styles/globals.css";
import { useDarkMode } from "@/context/DarkModeContext";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import WebIlustration from "@/components/about/WebIlustration";
import MobileIlustration from "@/components/about/MobileIlustration";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#0B0A0A]" : "bg-white"
      }`}
    >
      <main className="flex-1 flex justify-center p-4 md:p-8 px-4 md:px-12 lg:px-24 ml-0 md:ml-16">
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

            {/* Flex container untuk teks dan ikon Saweria */}
            <div className="flex justify-between items-center mt-2">
              {/* Teks "Students" dan "Based in Bogor" */}
              <p className="text-lg text-stone-500 text-sm">
                <span className="font-bold text-2xl relative top-[-4px]">
                  .
                </span>{" "}
                Students{" "}
                <span className="font-bold text-2xl relative top-[-4px]">
                  .
                </span>{" "}
                Based in Bogor 🇮🇩
              </p>

              {/* Ikon Saweria di pojok kanan */}
              <div className="ml-4">
                <Link href="/donate">
                  <FaDonate
                    className={`text-xl ${
                      isDarkMode
                        ? "text-stone-500 hover:text-stone-400"
                        : "text-stone-700 hover:text-stone-600"
                    } transition-colors cursor-pointer`}
                  />
                </Link>
              </div>
            </div>

            <p
              className={`mt-2 ${
                isDarkMode ? "text-stone-300" : "text-stone-700"
              }`}
            >
              I am a student at SMK Wikrama Bogor specializing in Frontend and
              Web Development. I have skills in JavaScript, PHP, and frameworks
              like Vue.js, React.js, and Laravel. I am passionate about UI/UX
              design and enjoy developing mobile apps using Flutter and Kotlin.
            </p>
          </section>

          {/* Section 2: Latest Articles */}
          <section
            className={`flex flex-col text-start border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start">
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
                  className={`px-2 py-2 rounded-lg text-sm flex items-center gap-2 mt-4 md:mt-0 ${
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
                      d="M23.198 0c-.499.264-1.209.675-1.79.984a542.82 542.82 0 000 6.242c.995-.526 1.761-.834 1.79-2.066V0zM8.743.181C7.298.144 5.613.65 4.47 1.414c-1.17.8-1.987 1.869-2.572 3.179A16.787 16.787 0 00.9 8.87c-.15 1.483-.128 3.079.025 4.677.27 1.855.601 3.724 1.616 5.456 1.57 2.62 4.313 4.109 7.262 4.19 3.41.246 7.233.53 11.411.807.022-2.005.01-5.418 0-6.25-3.206-.21-7.398-.524-11.047-.782-.443-.043-.896-.056-1.324-.172-1.086-.295-1.806-.802-2.374-1.757-.643-1.107-.875-2.832-.797-4.294.11-1.27.287-2.41 1.244-3.44.669-.56 1.307-.758 2.161-.84 5.17.345 7.609.53 12.137.858.032-1.133.01-3.46 0-6.229C16.561.752 12.776.474 8.743.181zm-.281 9.7c.174.675.338 1.305.729 1.903.537.832 1.375 1.127 2.388.877.76-.196 1.581-.645 2.35-1.282z"
                    />
                  </svg>
                  <span>Recent Projects from dicoding.com</span>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {[
                {
                  src: "/studycourse/gsap.png",
                  title: "Draw SVG - GSAP",
                  date: "2023-10-01",
                  isNew: true,
                },
                {
                  src: "/studycourse/android.png",
                  title: "State - Next Js App Libary",
                  date: "2023-09-15",
                  isNew: false,
                },
                {
                  src: "/studycourse/kotlin.png",
                  title: "Props and State Next Js",
                  date: "2023-08-20",
                  isNew: false,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`rounded-md relative overflow-hidden ${
                    isDarkMode ? "bg-neutral-950" : "bg-neutral"
                  }`}
                >
                  {/* Badge New */}
                  {project.isNew && (
                    <div className="absolute -right-7 top-5 w-28 bg-yellow-400 text-center text-black text-xs font-bold py-1 transform rotate-45 z-10 shadow-md">
                      <span className="relative">
                        NEW
                        {/* Tambah garis dekoratif */}
                        <div className="absolute -left-4 top-0 w-4 h-full bg-yellow-500/30 transform skew-x-45"></div>
                      </span>
                    </div>
                  )}

                  <div className="relative w-full h-28 overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover"
                      quality={75}
                    />
                  </div>

                  <div className="pt-3">
                    <h3
                      className={`font-bold ${
                        isDarkMode ? "text-stone-200" : "text-stone-800"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs mt-2 ${
                        isDarkMode ? "text-stone-400" : "text-stone-600"
                      }`}
                    >
                      Started on: {project.date}
                    </p>
                  </div>
                </div>
              ))}
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
              {/* Card 1: Website Development */}
              <div
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-700 ${
                  isDarkMode ? "bg-neutral-950" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
                    <WebIlustration />
                    {/* Gradient Outline */}
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mt-7 ${
                    isDarkMode ? "text-neutral-200" : "text-neutral-800"
                  }`}
                >
                  Website Development
                </h3>
                <p
                  className={`my-2 ${
                    isDarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  Create stunning, user-friendly fullstack web applications
                  using modern technologies.
                </p>
              </div>

              {/* Card 2: Mobile Development */}
              <div
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-700 ${
                  isDarkMode ? "bg-neutral-950" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
                    {/* Gradient Outline */}
                    <MobileIlustration />
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mt-7 ${
                    isDarkMode ? "text-neutral-200" : "text-neutral-800"
                  }`}
                >
                  Mobile Development
                </h3>
                <p
                  className={`my-2 ${
                    isDarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  Create smooth and cross-platform mobile applications using
                  React Native.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
