interface TabButtonsProps {
    activeTab: "projects" | "certificates";
    setActiveTab: (tab: "projects" | "certificates") => void;
    isDarkMode: boolean;
  }
  
  const TabButtons = ({ activeTab, setActiveTab, isDarkMode }: TabButtonsProps) => {
    return (
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "projects"
              ? isDarkMode
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
              : isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-gray-800"
          } transition-colors duration-300`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("certificates")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "certificates"
              ? isDarkMode
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
              : isDarkMode
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-gray-800"
          } transition-colors duration-300`}
        >
          Certificates
        </button>
      </div>
    );
  };
  
  export default TabButtons;