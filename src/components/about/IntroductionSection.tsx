import React from "react";

const IntroductionSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
    <section
      className={`border-b ${
        isDarkMode ? "border-stone-700" : "border-stone-300"
      } pb-6`}
    >
      <div
        className={`border-b ${
          isDarkMode ? "border-stone-700" : "border-stone-300"
        } border-dotted pb-4`}
      >
        <div className="flex items-center space-x-3">
          <h1
            className={`text-2xl md:text-3xl font-bold ${
              isDarkMode ? "text-stone-200" : "text-gray-800"
            }`}
          >
            About
          </h1>
        </div>
        <p
          className={`mt-2 text-sm md:text-base ${
            isDarkMode ? "text-stone-400" : "text-gray-600"
          }`}
        >
          A short story of me
        </p>
      </div>
      <div
        className={`space-y-4 pt-3 text-sm md:text-base ${
          isDarkMode ? "text-stone-300" : "text-gray-700"
        }`}
      >
        <p>
          Hi! I am Fajar Fauzian, a student at SMK Wikrama Bogor majoring
          in Software and Game Development, specializing in Frontend and
          Web Development. I have developed strong skills in JavaScript,
          PHP, and various frameworks such as Vue.js, React.js, Next.js,
          and Laravel, allowing me to build innovative and user-friendly
          web applications.
        </p>
        <p>
          In addition to web development, I am highly interested in
          designing UI/UX for mobile applications. I focus on creating
          simple yet functional designs that enhance user experience while
          maintaining visual appeal. This interest motivates me to
          continuously explore creative approaches to design challenges.
        </p>
        <p>
          To further expand my expertise, I am eager to dive into mobile
          app development using Flutter and Kotlin. By mastering these
          technologies, I aim to strengthen my skills and contribute to
          building versatile applications across different platforms.
        </p>
        <p>
          Thank you for visiting, and I look forward to embarking on this
          knowledge-sharing adventure.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;