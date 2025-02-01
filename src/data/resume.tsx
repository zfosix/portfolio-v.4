// Import React Icons
import { FaGithubAlt, FaBootstrap, FaJava } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiGraphql,
  SiReactquery,
  SiGulp,
  SiPrisma,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

// Data Struktur
export const DATA = {
  frontendSkills: [
    { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-2xl text-purple-600" /> },
    { name: "SASS", icon: <FaSass className="text-2xl text-pink-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-2xl text-black dark:text-white" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-2xl text-purple-600" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-2xl text-blue-400" />,
    },
    { name: "Figma", icon: <FaFigma className="text-2xl text-purple-500" /> },
    {
      name: "React Query",
      icon: <SiReactquery className="text-2xl text-red-500" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-2xl text-blue-600" />,
    },
  ],
  backendSkills: [
    { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-2xl text-gray-500" />,
    },
    { name: "Laravel", icon: <SiLaravel className="text-2xl text-red-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-2xl text-blue-800" />,
    },
    { name: "Java", icon: <FaJava className="text-2xl text-red-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-2xl text-orange-600" /> },
    {
      name: "GitHub",
      icon: <FaGithubAlt className="text-2xl text-gray-700" />,
    },
    { name: "GitLab", icon: <FaGitlab className="text-2xl text-orange-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-2xl text-teal-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-2xl text-pink-500" /> },
    { name: "Gulp", icon: <SiGulp className="text-2xl text-red-600" /> },
  ],

  categories: {
    React: {
      color: "blue",
      posts: [
        {
          id: 1,
          title: "React Server Components: The Future of React",
          excerpt:
            "Discover how React Server Components are revolutionizing the way we build React applications with improved performance and better user experience.",
          date: "June 23, 2023",
          views: 2519,
          category: "React",
          readTime: "10 min read",
          author: "John Doe",
          authorRole: "React Expert",
        },
        {
          id: 2,
          title: "React 19 Features You Need to Know",
          excerpt:
            "An in-depth look at the upcoming features in React 19 and how they will change the way we develop applications.",
          date: "June 25, 2023",
          views: 1850,
          category: "React",
          readTime: "8 min read",
          author: "Sarah Wilson",
          authorRole: "Frontend Developer",
        },
      ],
    },
    TypeScript: {
      color: "indigo",
      posts: [
        {
          id: 3,
          title: "Advanced TypeScript Patterns in React",
          excerpt:
            "Learn how to leverage TypeScript's powerful type system to write more maintainable React applications.",
          date: "June 28, 2023",
          views: 1982,
          category: "TypeScript",
          readTime: "12 min read",
          author: "Mike Johnson",
          authorRole: "TypeScript Advocate",
        },
      ],
    },
    Performance: {
      color: "green",
      posts: [
        {
          id: 4,
          title: "Web Vitals Optimization in React",
          excerpt:
            "A comprehensive guide to optimizing Core Web Vitals in your React applications for better performance and SEO.",
          date: "July 1, 2023",
          views: 1567,
          category: "Performance",
          readTime: "15 min read",
          author: "Emily Chen",
          authorRole: "Performance Engineer",
        },
      ],
    },
    "State Management": {
      color: "purple",
      posts: [
        {
          id: 5,
          title: "Understanding Zustand vs Redux",
          excerpt:
            "A detailed comparison of Zustand and Redux for state management in React applications.",
          date: "July 3, 2023",
          views: 2102,
          category: "State Management",
          readTime: "10 min read",
          author: "Alex Turner",
          authorRole: "Frontend Architect",
        },
      ],
    },
    Testing: {
      color: "rose",
      posts: [
        {
          id: 6,
          title: "Testing React Components with Vitest",
          excerpt:
            "Learn how to effectively test your React components using Vitest and React Testing Library.",
          date: "July 5, 2023",
          views: 1345,
          category: "Testing",
          readTime: "8 min read",
          author: "David Kim",
          authorRole: "Test Engineer",
        },
      ],
    },
    "Next.js": {
      color: "yellow",
      posts: [
        {
          id: 7,
          title: "Next.js 14 Server Actions Guide",
          excerpt:
            "A comprehensive guide to using Server Actions in Next.js 14 for better performance and user experience.",
          date: "July 7, 2023",
          views: 2890,
          category: "Next.js",
          readTime: "12 min read",
          author: "Lisa Wang",
          authorRole: "Next.js Developer",
        },
      ],
    },
  },
projects: [
    {
      id: 1,
      title: "JokiGames & TopUpGames",
      description:
        "This is a website for game jockeys and top ups, equipped with many cool features.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"],
      image: "/projects/jokigames.png",
      link: "#",
    },
    {
      id: 2,
      title: "Ciu Isurannce",
      description:
        "Insurance bank handling application with attractive design and complete features.",
      technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"],
      image: "/projects/ciudigital.png",
      link: "#",
    },
  ],
  
  certificates: [
    {
      id: 1,
      title: "PT NARANTRAYA TEKNOLOGI DIGITAL",
      description: "Telah menyelesaikan Praktik Kerja Industri",
      issuedBy: "PT Narantraya",
      date: "2024-07-21",
      image: "/certificates/pkl.png",
      link: "https://drive.google.com/file/d/1-91o_3jpjzmoUKd3mXWoFsixi5HwYR8G/view?usp=drive_link",
    },
    {
      id: 2,
      title: "IGDX Career Seminar",
      description: "Career Guidance For Aspiring Game Developer.",
      issuedBy: "IGDX Career",
      date: "2024-12-18",
      image: "/certificates/igdx.png",
      link: "https://drive.google.com/file/d/1H4aCas-yLXKmizrN3QaRJSN3az9B1KC_/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Front-End with VUE JS",
      description: "Front-end Development with The Progressive JavaScript Framework Vue.js",
      issuedBy: "Wanteknologi",
      date: "2023-10-30",
      image: "/certificates/vuejs.png",
      link: "https://drive.google.com/file/d/1BZ3ccpGrEE_2IZWN9KDVR7c1yPTVC-Fx/view?usp=drive_link",
    },
    {
      id: 4,
      title: "Back-End with JavaScript Framework",
      description: "Joining the Backend Development with Javascript Framework Training with PT.Laskar Teknologi Mulia (Cyberlabs).",
      issuedBy: "PT Laskar Teknologi Mulia",
      date: "2023-11-10",
      image: "/certificates/express.png",
      link: "https://drive.google.com/file/d/12W30fxT1vpU0nziuJVKOL38qBadhumrg/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Belajar Dasar AI",
      description: "Certification for completing the AI course Dicoding.",
      issuedBy: "Dicoding",
      date: "2024-11-30",
      image: "/certificates/dicai.png",
      link: "https://drive.google.com/file/d/1Q59lDUnG8LaOrxpwZ5RvG_SQCmEzvF_E/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      description: "Certification for completing the Frontend Web course Dicoding.",
      issuedBy: "Dicoding",
      date: "2023-11-24",
      image: "/certificates/dicfepml.png",
      link: "https://drive.google.com/file/d/1moE3wdslssz-TDvWTeP0tqq5URyqv9S5/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      description: "Certification for completing the AWS course Dicoding.",
      issuedBy: "Dicoding",
      date: "2023-11-25",
      image: "/certificates/dicaws.png",
      link: "https://drive.google.com/file/d/1i89m11ZocSTqaQk8AhiPsxFJ6HxYZ3xq/view?usp=drive_link",
    },
    {
      id: 8,
      title: "Belajar Dasar Pemrograman JavaScript",
      description: "Certification for completing the JS course Dicoding.",
      issuedBy: "Dicoding",
      date: "2025-01-24",
      image: "/certificates/dicjs.png",
      link: "https://drive.google.com/file/d/1D8sIA-4zFwJpjtkPoI_LbADspGeRBZzG/view?usp=drive_link",
    },
  ],
  
};
