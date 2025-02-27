import { motion } from "framer-motion";
import { FaProjectDiagram, FaCertificate } from "react-icons/fa";

interface TabHeaderProps {
  activeTab: "projects" | "certificates";
  isDarkMode: boolean;
}

const TabHeader = ({ activeTab, isDarkMode }: TabHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-start mb-8"
    >
      <div
        className={`border-b ${
          isDarkMode ? "border-stone-700" : "border-stone-300"
        } border-dotted pb-4`}
      >
        <div className="flex items-center space-x-3">
          {activeTab === "projects" ? (
            <FaProjectDiagram
              className={`text-3xl ${
                isDarkMode ? "text-stone-200" : "text-gray-800"
              }`}
            />
          ) : (
            <FaCertificate
              className={`text-3xl ${
                isDarkMode ? "text-stone-200" : "text-gray-800"
              }`}
            />
          )}
          <h1
            className={`text-3xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          >
            {activeTab === "projects" ? "Projects" : "Certificates"}
          </h1>
        </div>
        <p
          className={`mt-2 ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          {activeTab === "projects"
            ? "Showcasing my passion for technology, design, and problem-solving through code."
            : "A collection of certifications that validate my skills and knowledge."}
        </p>
      </div>
    </motion.div>
  );
};

export default TabHeader;