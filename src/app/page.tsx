"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import IntroSection from "@/components/home/IntroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";

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
          <IntroSection />

          {/* Section 2: Recent Projects (Carousel) */}
          {<ProjectsSection />}

          {/* Section 3: Services */}
          <ServicesSection />
        </div>
      </main>
    </div>
  );
}