// Import semua ikon yang diperlukan
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithubAlt,
  FaGitlab,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiTypescript,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiGulp,
  SiJavascript,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

// Data projects
export const projects = [
  {
    src: "/studycourse/gsap.png",
    title: "Draw SVG - GSAP",
    date: "2023-10-01",
    isNew: true,
  },
  {
    src: "/studycourse/android.png",
    title: "State - Next Js App Libary",
    date: "2023-09-15",
    isNew: false,
  },
  {
    src: "/studycourse/gsap.png",
    title: "Draw SVG - GSAP",
    date: "2023-10-01",
    isNew: true,
  },
  {
    src: "/studycourse/kotlin.png",
    title: "Props and State Next Js",
    date: "2023-08-20",
    isNew: false,
  },
  {
    src: "/studycourse/android.png",
    title: "State - Next Js App Libary",
    date: "2023-09-15",
    isNew: false,
  },
  {
    src: "/studycourse/kotlin.png",
    title: "Props and State Next Js",
    date: "2023-08-20",
    isNew: false,
  },
];

export const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-2xl " /> },
  { name: "CSS", icon: <FaCss3Alt className="text-2xl " /> },
  { name: "JavaScript", icon: <FaJs className="text-2xl " /> },
  { name: "React", icon: <FaReact className="text-2xl " /> },
  { name: "Redux", icon: <SiRedux className="text-2xl " /> },
  { name: "SASS", icon: <FaSass className="text-2xl " /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-2xl " />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-2xl " />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-2xl " />,
  },
  { name: "Figma", icon: <FaFigma className="text-2xl " /> },
  {
    name: "React Query",
    icon: <SiReactquery className="text-2xl " />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-2xl" />,
  },
];

export const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-2xl " />,
  },
  { name: "Laravel", icon: <SiLaravel className="text-2xl " /> },
  { name: "MySQL", icon: <SiMysql className="text-2xl " /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-2xl " />,
  },
  { name: "Java", icon: <FaJava className="text-2xl " /> },
  { name: "Git", icon: <FaGitAlt className="text-2xl " /> },
  {
    name: "GitHub",
    icon: <FaGithubAlt className="text-2xl " />,
  },
  { name: "GitLab", icon: <FaGitlab className="text-2xl " /> },
  { name: "Prisma", icon: <SiPrisma className="text-2xl " /> },
  { name: "GraphQL", icon: <SiGraphql className="text-2xl " /> },
  { name: "Gulp", icon: <SiGulp className="text-2xl " /> },
];

// Data categories
export const categories = {
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
};

// Data projects dengan id
export const detailedProjects = [
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
];

// Data certificates
export const certificates = [
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
    description:
      "Front-end Development with The Progressive JavaScript Framework Vue.js",
    issuedBy: "Wanteknologi",
    date: "2023-10-30",
    image: "/certificates/vuejs.png",
    link: "https://drive.google.com/file/d/1BZ3ccpGrEE_2IZWN9KDVR7c1yPTVC-Fx/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Back-End with JavaScript Framework",
    description:
      "Joining the Backend Development with Javascript Framework Training with PT.Laskar Teknologi Mulia (Cyberlabs).",
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
    description:
      "Certification for completing the Frontend Web course Dicoding.",
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
];

// Data skill categories dengan level
export const skillCategories = {
  frontend: [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/NBZ9Ro6UKV8?si=anv9JNlwERFgbgYs",
    },
    {
      title: "CSS Dasar",
      icon: <FaCss3Alt className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/CleFk3BZB3g?si=bHSaWGWhmobTJkJk",
    },
    {
      title: "CSS Layouting",
      icon: <FaCss3Alt className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/Phn2eN6j0pg?si=2wB6RlRNuti15h6F",
    },
    {
      title: "CSS 3",
      icon: <FaCss3Alt className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/J0a6YUUAsd4?si=zrLHkVnuUtxh6HPF",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="text-3xl text-purple-500" />,
      level: "(Expert)",
      link: "https://youtu.be/NNW7Tg8CgAQ?si=VK75AFRAKvpdY-ka",
    },
    {
      title: "Flexbox CSS",
      icon: <FaCss3Alt className="text-3xl" />,
      level: "(Intermediate)",
      link: "https://youtu.be/-J372iDFU8Y?si=0pcuU0M5Wc_lPRQX",
    },
    {
      title: "Git & Github",
      icon: <FaGitAlt className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/lTMZxWMjXQU?si=vCEvxTii1xyvqbPb",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl" />,
      level: "(Expert)",
      link: "https://youtu.be/z3slaXqmkT0?si=0ry07V0kfVoIi5YJ",
    },
    {
      title: "Javascript Dasar",
      icon: <SiJavascript className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/RUTV_5m4VeI?si=W-U4ST5QB956NnWQ",
    },
    {
      title: "Javascript DOM",
      icon: <SiJavascript className="text-3xl" />,
      level: "(Intermediate)",
      link: "https://youtu.be/aT60R1cySLM?si=7vqd6Db69luwZOwh",
    },
    {
      title: "Javascript Lanjutan",
      icon: <SiJavascript className="text-3xl" />,
      level: "(Intermediate)",
      link: "https://youtu.be/RwT41El778A?si=JyMGc59VfCIwIHjC",
    },
    {
      title: "React JS",
      icon: <FaReact className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/rNSfMxMPWqc?si=5KZ3c27jOKvy81cT",
    },
    {
      title: "Typescript",
      icon: <SiTypescript className="text-3xl" />,
      level: "(Beginner)",
      link: "https://youtu.be/C_C64faSO4c?si=9Yni67BMYGsauJJc",
    },
    {
      title: "React Typescript",
      icon: <SiTypescript className="text-3xl" />,
      level: "(Intermediate)",
      link: "https://www.youtube.com/live/0gHQK9J8zMU?si=aJlG_fCh9ZtZK1aN",
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs className="text-3xl" />,
      level: "Mastery/Spesialis",
      link: "https://youtu.be/zw5wKyqDEUc?si=RvK6843Q7zePC2Fb",
    },
  ],
  backend: [
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-3xl" />,
      level: "(Beginner)",
      link: "https://youtu.be/sSLJx5t4OJ4?si=jfxz8nkjzwwINZmPl",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-3xl" />,
      level: "(Intermediate)",
      link: "https://youtu.be/TecGUz4bPFA?si=yWwMZYhChA-K5VRA",
    },
    {
      title: "RESTful APIs",
      icon: <FaDatabase className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/vQJJ_K1JbEA?si=dy9JykPJDto57wVy",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-3xl" />,
      level: "(Beginner)",
      link: "https://youtu.be/JXXUBiJGu94?si=-91qcpHto0v1FeZV",
    },
    {
      title: "SQL",
      icon: <FaDatabase className="text-3xl" />,
      level: "(Advanced)",
      link: "https://youtu.be/OfrTiLzHv3g?si=yZDahChdRYL3pz0k",
    },
    {
      title: "Authentication",
      icon: <FaDatabase className="text-3xl" />,
      level: "(Expert)",
      link: "https://youtu.be/9ed3b0tSRvI?si=sw2OBdHmXPWI4geB",
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-3xl" />,
      level: "(Beginner)",
      link: "https://youtu.be/3_yxVjV88Zk?si=SNsVdxvgzANJaMJH",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className="text-3xl" />,
      level: "(Beginner)",
      link: "https://youtu.be/IGZr3_yMSMA?si=HzKSRL1qxGY4SNCv",
    },
  ],
};
