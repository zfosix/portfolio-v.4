// import { useDarkMode } from "@/context/DarkModeContext";
import { FaGithub, FaLinkedin, FaSpotify, FaDiscord } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
    <div
      className={`flex flex-row-reverse items-center justify-between border ${bgColor} ${borderColor} ${darkBgColor} rounded-lg p-4`}
    >
      {icon}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <button
          onClick={() => window.open(url, "_blank")}
          className={`mt-2 ${buttonColor} text-white py-1 px-4 rounded-md ${hoverColor} focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 flex items-center`}
        >
          {buttonText}
          <FiExternalLink className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const SocialCards = () => {
  const socialData = [
    {
      icon: <FaGithub className="text-6xl" />,
      title: "Explore the code",
      description: "Explore the source code for all my projects on GitHub.",
      buttonText: "Go to GitHub",
      buttonColor: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
      ringColor: "focus:ring-gray-500",
      bgColor: "bg-slate-300",
      darkBgColor: "dark:bg-slate-950",
      borderColor: "border-gray-800",
      url: "https://github.com/zfosix",
    },
    {
      icon: <FaLinkedin className="text-6xl" />,
      title: "Let's connect",
      description:
        "Connect for collaboration or explore my professional experience.",
      buttonText: "Go to LinkedIn",
      buttonColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      ringColor: "focus:ring-blue-500",
      bgColor: "bg-blue-300",
      darkBgColor: "dark:bg-blue-950",
      borderColor: "border-blue-600",
      url: "https://www.linkedin.com/in/fajar-fauzian-153220277/",
    },
    {
      icon: <FaSpotify className="text-6xl" />,
      title: "Listen to my playlist",
      description: "Check out my favorite tracks and playlists on Spotify.",
      buttonText: "Go to Spotify",
      buttonColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      ringColor: "focus:ring-green-500",
      bgColor: "bg-green-300",
      darkBgColor: "dark:bg-green-950",
      borderColor: "border-green-600",
      url: "https://open.spotify.com/user/31kj3hpqmaeuws6chgvj4dfblkyi?si=b5a858dd2f2845e8",
    },
    {
      icon: <FaDiscord className="text-6xl" />,
      title: "Chat with the community",
      description:
        "Join over 1,000+ other developers on The Code Bayu Discord.",
      buttonText: "Go to Discord",
      buttonColor: "bg-violet-600",
      hoverColor: "hover:bg-violet-700",
      ringColor: "focus:ring-violet-500",
      bgColor: "bg-violet-300",
      darkBgColor: "dark:bg-violet-950",
      borderColor: "border-violet-600",
      url: "https://discordapp.com/users/creamnotsix",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {socialData.map((social, index) => (
        <SocialCard key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialCards;