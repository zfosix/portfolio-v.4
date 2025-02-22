"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "@/styles/globals.css";
import { useDarkMode } from "@/context/DarkModeContext";
import { FaCode, FaProjectDiagram, FaBullhorn, FaDonate } from "react-icons/fa";
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
  const [isClient, setIsClient] = useState(false);

  const visibleCards = 3;

  useEffect(() => {
    setIsClient(true);

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
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "bg-[#0B0A0A]" : "bg-white"}`}>
      <main className="flex-1 flex justify-center px-4 sm:px-8 md:px-12 lg:px-24 ml-0 md:ml-16">
        <div className="w-full max-w-4xl transition-all duration-500 ease-in-out">
          {/* Section 1: Introduction */}
          <section className={`flex flex-col text-start border-b ${
            isDarkMode ? "border-stone-700" : "border-stone-300"
          } py-8 sm:py-10`}>
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-stone-800"
            }`}>
              Hi, I&apos;m{" "}
              <span className="inline-block">
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

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
              <p className="text-base sm:text-lg text-stone-500">
                <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
                Students{" "}
                <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
                Based in Bogor 🇮🇩
              </p>

              <div className="mt-3 sm:mt-0">
                <Link href="/donate">
                  <FaDonate className={`text-xl ${
                    isDarkMode
                      ? "text-stone-500 hover:text-stone-400"
                      : "text-stone-700 hover:text-stone-600"
                  } transition-colors cursor-pointer`} />
                </Link>
              </div>
            </div>

            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
              isDarkMode ? "text-stone-300" : "text-stone-700"
            }`}>
              I am a student at SMK Wikrama Bogor specializing in Frontend and
              Web Development. I have skills in JavaScript, PHP, and frameworks
              like Vue.js, React.js, and Laravel. I am passionate about UI/UX
              design and enjoy developing mobile apps using Flutter and Kotlin.
            </p>
          </section>

          {/* Section 2: Recent Projects */}
          <section className={`flex flex-col text-start border-b ${
            isDarkMode ? "border-stone-700" : "border-stone-300"
          } py-8 sm:py-10`}>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <FaCode className={`text-xl ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`} />
                  <h2 className={`text-xl sm:text-2xl font-bold ${
                    isDarkMode ? "text-stone-200" : "text-stone-800"
                  }`}>
                    Recent Projects
                  </h2>
                </div>
                <p className={`text-sm mt-2 ${
                  isDarkMode ? "text-stone-400" : "text-stone-600"
                }`}>
                  course by dicoding.com
                </p>
              </div>
              
              <Link href="https://www.dicoding.com/academies/my" passHref>
                <motion.button
                  className={`w-full sm:w-auto px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-neutral-900 text-stone-200 hover:bg-neutral-800"
                      : "bg-neutral-200 text-stone-800 hover:bg-neutral-300"
                  } transition-colors shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBullhorn className="w-4 h-4" />
                  <span>Recent Projects from dicoding.com</span>
                </motion.button>
              </Link>
            </div>

            {/* Keeping original carousel code */}
            {isClient && (
              <div
                className="relative overflow-hidden mt-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                    width: `${(projects.length / visibleCards) * 50}%`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                      style={{
                        width: `${windowWidth < 768 ? 300 / visibleCards : 100 / visibleCards}%`,
                      }}
                    >
                      <div className={`rounded-sm relative overflow-hidden ${
                        isDarkMode ? "bg-neutral-950" : "bg-neutral"
                      }`}>
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
                        <div className="p-4">
                          <h3 className={`font-bold ${
                            isDarkMode ? "text-stone-200" : "text-stone-800"
                          }`}>
                            {project.title}
                          </h3>
                          <p className={`text-xs mt-2 ${
                            isDarkMode ? "text-stone-400" : "text-stone-600"
                          }`}>
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
          <section className={`flex flex-col text-start border-b ${
            isDarkMode ? "border-stone-700" : "border-stone-300"
          } py-8 sm:py-10`}>
            <div className="flex items-center gap-2 mb-6">
              <FaProjectDiagram className={`text-xl ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`} />
              <h2 className={`text-xl sm:text-2xl font-bold ${
                isDarkMode ? "text-stone-200" : "text-stone-800"
              }`}>
                Services
              </h2>
            </div>
            <p className={`mb-6 text-base sm:text-lg ${
              isDarkMode ? "text-stone-300" : "text-stone-700"
            }`}>
              I can deliver the following services
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Website Development",
                  description: "Build responsive and scalable websites tailored to your business needs, using the latest web technologies.",
                  Illustration: WebIlustration
                },
                {
                  title: "Mobile Development",
                  description: "Develop high-performance mobile applications for iOS and Android platforms using React Native.",
                  Illustration: MobileIlustration
                },
                {
                  title: "Landing Page Design",
                  description: "Design and develop high-converting landing pages that capture leads and drive sales.",
                  Illustration: LandingIllustration
                },
                {
                  title: "Dashboard Management",
                  description: "Create intuitive and powerful dashboards to visualize data and manage your business operations efficiently.",
                  Illustration: DashboardIllustration
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                    isDarkMode 
                      ? "border-neutral-800 bg-neutral-950/70 hover:bg-neutral-900/70" 
                      : "border-neutral-300 bg-neutral-50 hover:bg-neutral-100"
                  }`}
                >
                  <div className="flex justify-center">
                    <div className="relative transform transition-transform duration-300 hover:scale-105">
                      <service.Illustration />
                    </div>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold mt-6 ${
                    isDarkMode ? "text-neutral-200" : "text-neutral-800"
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}