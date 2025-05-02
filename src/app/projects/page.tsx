"use client";

import { useState } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { detailedProjects, certificates } from "@/data/resume";
import { isProject, isCertificate } from "@/types/projects";
import TabHeader from "@/components/projects/TabHeader";
import TabButtons from "@/components/projects/TabButtons";
import ProjectItem from "@/components/projects/ProjectItem";
import CertificateItem from "@/components/projects/CertificateItem";

const ProjectsPage = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");

  const displayedItems = activeTab === "projects" ? detailedProjects : certificates;

  return (
    <div
      className={`flex min-h-screen pb-8 ${
        isDarkMode ? "bg-[#0B0A0A] text-white" : "bg-white text-black"
      }`}
    >
      <main className="flex-1 flex justify-center pt-8 md:pt-12 px-4 md:px-8 lg:px-12 ml-0 md:ml-8">
        <div className="max-w-4xl mx-auto w-full">
          <TabHeader activeTab={activeTab} isDarkMode={isDarkMode} />
          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

          <div className={`grid grid-cols-1 ${activeTab === "projects" ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
            {displayedItems.map((item) => {
              if (isProject(item)) {
                return (
                  <ProjectItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    technologies={item.technologies}
                    image={item.image}
                    link={item.link}
                    isDarkMode={isDarkMode}
                  />
                );
              } else if (isCertificate(item)) {
                return (
                  <CertificateItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    issuedBy={item.issuedBy}
                    date={item.date}
                    image={item.image}
                    link={item.link}
                    isDarkMode={isDarkMode}
                  />
                );
              }
              return null; 
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;