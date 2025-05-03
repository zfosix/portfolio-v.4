import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaDribbble } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  hoverColor: string;
  ringColor: string;
  bgColor: string;
  darkBgColor: string;
  borderColor: string;
  url: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  hoverColor,
  ringColor,
  bgColor,
  darkBgColor,
  borderColor,
  url,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative overflow-hidden backdrop-blur-sm border-2 ${borderColor} ${bgColor} ${darkBgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "text-9xl" })}
      </div>
      
      <div className="flex flex-col space-y-4 relative z-10">
        <div className="flex items-center space-x-4">
          {React.cloneElement(icon as React.ReactElement<{ className: string }>, { className: "text-4xl" })}
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(url, "_blank")}
          className={`w-full ${buttonColor} text-white py-3 px-6 rounded-lg ${hoverColor} focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 transition-all duration-300 flex items-center justify-center space-x-2 font-medium`}
        >
          <span>{buttonText}</span>
          <FiExternalLink className="text-lg" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const SocialCards = () => {
  const socialData = [
    {
      icon: <FaGithub />,
      title: "Explore the code",
      description: "Explore the source code for all my projects on GitHub.",
      buttonText: "Go to GitHub",
      buttonColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
      ringColor: "focus:ring-gray-500",
      bgColor: "bg-slate-300/50",
      darkBgColor: "dark:bg-slate-950/50",
      borderColor: "border-gray-800/20",
      url: "https://github.com/zfosix",
    },
    {
      icon: <FaLinkedin />,
      title: "Let's connect",
      description: "Connect and explore my professional experience.",
      buttonText: "Go to LinkedIn",
      buttonColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      ringColor: "focus:ring-blue-500",
      bgColor: "bg-blue-300/50",
      darkBgColor: "dark:bg-blue-950/50",
      borderColor: "border-blue-600/20",
      url: "https://www.linkedin.com/in/fajar-fauzian-153220277/",
    },
    {
      icon: <FaSpotify />,
      title: "Listen to my playlist",
      description: "Check out my favorite tracks and playlists on Spotify.",
      buttonText: "Go to Spotify",
      buttonColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      ringColor: "focus:ring-green-500",
      bgColor: "bg-green-300/50",
      darkBgColor: "dark:bg-green-950/50",
      borderColor: "border-green-600/20",
      url: "https://open.spotify.com/user/31kj3hpqmaeuws6chgvj4dfblkyi?si=b5a858dd2f2845e8",
    },
    {
      icon: <FaDribbble />,
      title: "Check my designs",
      description: "Explore my design portfolio on Dribbble.",
      buttonText: "Go to Dribbble",
      buttonColor: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      ringColor: "focus:ring-pink-500",
      bgColor: "bg-pink-300/50",
      darkBgColor: "dark:bg-pink-950/50",
      borderColor: "border-pink-600/20",
      url: "https://dribbble.com/zfosix",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {socialData.map((social, index) => (
        <SocialCard key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialCards;