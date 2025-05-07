interface TabButtonsProps {
  activeTab: "projects" | "certificates";
  setActiveTab: (tab: "projects" | "certificates") => void;
  isDarkMode: boolean;
}

const TabButtons = ({ activeTab, setActiveTab, isDarkMode }: TabButtonsProps) => {
  return (
    <div className="flex items-center pb-7 bg-opacity-20 rounded-xl backdrop-blur-sm">
      <div className="flex space-x-2 relative">
        {["projects", "certificates"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "projects" | "certificates")}
            className={`
              relative px-6 py-3 rounded-lg font-medium
              transition-all duration-300 ease-in-out
              ${
                activeTab === tab
                  ? isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gradient-to-r from-blue-500 to-blue-300 text-white shadow-lg shadow-blue-400/30"
                  : isDarkMode
                  ? "hover:bg-gray-700/50 text-gray-300"
                  : "hover:bg-gray-200/50 text-gray-800"
              }
              ${
                activeTab !== tab &&
                "hover:transform hover:scale-105 hover:shadow-md"
              }
            `}
          >
            <span className="capitalize">{tab}</span>
            {activeTab === tab && (
              <span className="absolute bottom-0 left-1/2 w-1/3 h-1 bg-white rounded-full transform -translate-x-1/2 transition-all duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabButtons;
