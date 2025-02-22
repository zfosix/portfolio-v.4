"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "@/styles/globals.css";
import { useDarkMode } from "@/context/DarkModeContext";
import { FaCode, FaProjectDiagram, FaBullhorn } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import WebIlustration from "@/components/about/WebIlustration";
import MobileIlustration from "@/components/about/MobileIlustration";
import "react-multi-carousel/lib/styles.css";
import LandingIllustration from "@/components/about/LandingIlustration";
import DashboardIllustration from "@/components/about/DashboardIlustration";
import { useEffect, useState } from "react";
import { projects } from "@/data/resume";
import { motion } from "framer-motion";

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if the component has mounted

  const visibleCards = 3;

  useEffect(() => {
    // Set isClient to true after mounting
    setIsClient(true);

    // Update window width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (projects.length - visibleCards + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

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

            <div className="flex justify-between items-center mt-2">
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

          {/* Section 2: Recent Projects (Carousel) */}
          <section
            className={`flex flex-col text-start border-b ${
              isDarkMode ? "border-stone-700" : "border-stone-300"
            } py-6`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div>
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
                <p
                  className={`text-sm pt-2 ${
                    isDarkMode ? "text-stone-400" : "text-stone-600"
                  }`}
                >
                  course by dicoding.com
                </p>
              </div>
              <Link href="https://www.dicoding.com/academies/my" passHref>
                <motion.button
                  className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 mt-4 md:mt-0 ${
                    isDarkMode
                      ? "bg-neutral-900 text-stone-200 hover:bg-neutral-700"
                      : "bg-neutral-200 text-stone-800 hover:bg-neutral-300"
                  } transition-colors shadow-lg hover:shadow-xl active:scale-95`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBullhorn className="w-5 h-5" />{" "}
                  <span>Recent Projects from dicoding.com</span>
                </motion.button>
              </Link>
            </div>

            {/* Render the carousel only on the client side */}
            {isClient && (
              <div
                className="relative overflow-hidden mt-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / visibleCards)
                    }%)`,
                    width: `${(projects.length / visibleCards) * 50}%`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                      style={{
                        width: `${
                          windowWidth < 768
                            ? 300 / visibleCards
                            : 100 / visibleCards
                        }%`,
                      }}
                    >
                      <div
                        className={`rounded-sm relative overflow-hidden ${
                          isDarkMode ? "bg-neutral-950" : "bg-neutral"
                        }`}
                      >
                        {project.isNew && (
                          <div className="absolute -right-7 top-5 w-28 bg-yellow-400 text-center text-black text-xs font-bold py-1 transform rotate-45 z-10 shadow-md">
                            <span className="relative">
                              NEW
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
                            sizes="(max-width: 768px) 100vw, 50vw"
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
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-800 ${
                  isDarkMode ? "bg-neutral-950/70" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
                    <WebIlustration />
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
                  Build responsive and scalable websites tailored to your
                  business needs, using the latest web technologies.
                </p>
              </div>

              {/* Card 2: Mobile Development */}
              <div
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-800 ${
                  isDarkMode ? "bg-neutral-950/70" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
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
                  Develop high-performance mobile applications for iOS and
                  Android platforms using React Native.
                </p>
              </div>

              {/* Card 3: Landing Page */}
              <div
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-800 ${
                  isDarkMode ? "bg-neutral-950/70" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
                    <LandingIllustration />
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mt-7 ${
                    isDarkMode ? "text-neutral-200" : "text-neutral-800"
                  }`}
                >
                  Landing Page Design
                </h3>
                <p
                  className={`my-2 ${
                    isDarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  Design and develop high-converting landing pages that capture
                  leads and drive sales.
                </p>
              </div>

              {/* Card 4: Dashboard Development */}
              <div
                className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-800 ${
                  isDarkMode ? "bg-neutral-950/70" : "bg-neutral"
                } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              >
                <div className="flex justify-center relative">
                  <div className="relative inline-block">
                    <DashboardIllustration />
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mt-7 ${
                    isDarkMode ? "text-neutral-200" : "text-neutral-800"
                  }`}
                >
                  Dashboard Management
                </h3>
                <p
                  className={`my-2 ${
                    isDarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  Create intuitive and powerful dashboards to visualize data and
                  manage your business operations efficiently.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
