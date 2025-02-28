import { FaProjectDiagram } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";
import WebIlustration from "@/components/home/WebIlustration";
import MobileIllustration from "@/components/home/MobileIlustration";
import LandingIllustration from "@/components/home/LandingIlustration";
import DashboardIllustration from "@/components/home/DashboardIlustration";

const ServicesSection = () => {
  const { isDarkMode } = useDarkMode();

  const serviceCards = [
    {
      title: "Website Development",
      description: "Build responsive and scalable websites tailored to your business needs, using the latest web technologies.",
      Illustration: WebIlustration
    },
    {
      title: "Mobile Development",
      description: "Develop high-performance mobile applications for iOS and Android platforms using React Native.",
      Illustration: MobileIllustration
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
  ];

  return (
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
        {serviceCards.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            isDarkMode={isDarkMode}
            Illustration={service.Illustration} 
          />
        ))}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  isDarkMode: boolean;
  Illustration: React.ComponentType;
}

const ServiceCard = ({ title, description, isDarkMode, Illustration }: ServiceCardProps) => (
  <div
    className={`p-6 rounded-lg border border-neutral-300 dark:border-neutral-800 ${
      isDarkMode ? "bg-neutral-950/70" : "bg-neutral-50"
    } transition-all duration-300 cursor-pointer relative overflow-hidden group`}
  >
    <div className="flex justify-center relative">
      <div className="relative inline-block">
        <Illustration />
      </div>
    </div>
    <h3
      className={`text-lg font-semibold mt-7 ${
        isDarkMode ? "text-neutral-200" : "text-neutral-800"
      }`}
    >
      {title}
    </h3>
    <p
      className={`my-2 ${
        isDarkMode ? "text-neutral-300" : "text-neutral-700"
      }`}
    >
      {description}
    </p>
  </div>
);

export default ServicesSection;