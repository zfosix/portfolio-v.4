import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaDonate } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";

const IntroSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
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
          <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
          Students{" "}
          <span className="font-bold text-2xl relative top-[-4px]">.</span>{" "}
          Based in Bogor 🇮🇩
        </p>

        <div className="ml-4">
          <Link href="https://saweria.co/zfosix">
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
  );
};

export default IntroSection;