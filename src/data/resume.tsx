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
import {
  // BiEditAlt as BlogIcon,
  BiPaperPlane as ContactIcon,
  // BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
} from 'react-icons/bi';
import { PiChatTeardropDotsBold as ChatIcon } from 'react-icons/pi';
import { LuWorkflow } from 'react-icons/lu';
import { MenuItemType } from '@/types/menu';

// Menu Item
export const MENU_ITEMS: MenuItemType[] = [
  {
    title: 'Home',
    href: '/',
    icon: HomeIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'About',
    href: '/about',
    icon: ProfileIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
  },
  // {
  //   title: 'Blog',
  //   href: '/blog?category=home',
  //   icon: BlogIcon,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Blog',
  // },
  {
    title: 'Projects',
    href: '/projects',
    icon: ProjectIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },  
  {
    title: 'Roadmap',
    href: '/roadmap',
    icon: LuWorkflow,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap',
  },
  {
    title: 'Chat Room',
    href: '/chatroom',
    icon: ChatIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Chat Room',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: ContactIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: DashboardIcon,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Dashboard',
  // },
];

// Data projects
export const projects = [
  {
    src: "/studycourse/nextapp.png",
    title: "State App Directory - NextJS",
    date: "2023-09-15",
    isNew: true,
  },
  {
    src: "/studycourse/reactlist.png",
    title: "List on State - ReactJS",
    date: "2023-09-15",
    isNew: true,
  },
  {
    src: "/studycourse/angular.png",
    title: "Angular coding style guide - AngularJS",
    date: "2023-09-15",
    isNew: false,
  },
  {
    src: "/studycourse/vue.png",
    title: "Vue Router - VueJS",
    date: "2023-09-15",
    isNew: true,
  },
];

// Skill List
export const SkillList = [
  { name: "HTML", icon: <FaHtml5 className="text-2xl" style={{ color: "#E34F26" }} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-2xl" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="text-2xl" style={{ color: "#F7DF1E" }} /> },
  { name: "React", icon: <FaReact className="text-2xl" style={{ color: "#61DAFB" }} /> },
  { name: "Redux", icon: <SiRedux className="text-2xl" style={{ color: "#764ABC" }} /> },
  { name: "SASS", icon: <FaSass className="text-2xl" style={{ color: "#CC6699" }} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-2xl" style={{ color: "#D1D5DB" }} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" style={{ color: "#7952B3" }} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-2xl" style={{ color: "#38B2AC" }} /> },
  { name: "Figma", icon: <FaFigma className="text-2xl" style={{ color: "#F24E1E" }} /> },
  { name: "React Query", icon: <SiReactquery className="text-2xl" style={{ color: "#FF4154" }} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl" style={{ color: "#3178C6" }} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl" style={{ color: "#339933" }} /> },
  { name: "Express.js", icon: <SiExpress className="text-2xl" style={{ color: "#1F2937" }} /> },
  { name: "Laravel", icon: <SiLaravel className="text-2xl" style={{ color: "#FF2D20" }} /> },
  { name: "MySQL", icon: <SiMysql className="text-2xl" style={{ color: "#4479A1" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" style={{ color: "#336791" }} /> },
  { name: "Java", icon: <FaJava className="text-2xl" style={{ color: "#007396" }} /> },
  { name: "Git", icon: <FaGitAlt className="text-2xl" style={{ color: "#F05032" }} /> },
  { name: "GitHub", icon: <FaGithubAlt className="text-2xl" style={{ color: "#D1D5DB" }} /> },
  { name: "GitLab", icon: <FaGitlab className="text-2xl" style={{ color: "#FC6D26" }} /> },
  { name: "Prisma", icon: <SiPrisma className="text-2xl" style={{ color: "#2D3748" }} /> },
  { name: "GraphQL", icon: <SiGraphql className="text-2xl" style={{ color: "#E10098" }} /> },
  { name: "Gulp", icon: <SiGulp className="text-2xl" style={{ color: "#CF4647" }} /> },
];

// Career data array to be imported in components
export const careerData = [
  {
    id: 1,
    company: "SMK Wikrama Bogor",
    position: "Frontend Developer | UI UX Designer | Web Developer",
    location: "Bogor, Indonesia",
    startDate: "Jun 2022",
    endDate: "Present",
    duration: "~31 Months",
    logo: "/career/wikrama.png",
    gradientColors: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    company: "PT Narantraya Teknologi Digital",
    position: "Frontend Developer | UI UX Designer | Frontend Website",
    location: "Jakarta, Indonesia",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    duration: "~6 Months",
    logo: "/career/narantraya.jpg",
    gradientColors: "from-red-700 to-red-500",
  },
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
        author: "Fajar Fauzian",
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
    title: "Eco Marketplace",
    description: "Platform digital untuk mendukung ekonomi hijau dan pekerjaan hijau.",
    detailedDescription: 'This project is based on the big theme of "Green Economy and Green Jobs", which is the main focus of developing sustainable digital solutions in the era of green economic transformation. Platform ini dirancang untuk menghubungkan produsen produk ramah lingkungan dengan konsumen yang peduli terhadap keberlanjutan. Dengan fitur pencarian canggih, sistem pembayaran yang aman, dan dashboard admin yang komprehensif, Eco Marketplace menjadi solusi lengkap untuk mendukung ekonomi hijau.',
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"],
    image: "/projects/marketplace.png",
    link: "#",
    slug: "eco-marketplace",
    gallery: [
      "/projects/detailsprojects/market/1.png",
      "/projects/detailsprojects/market/2.png",
      "/projects/detailsprojects/market/3.png",
      "/projects/detailsprojects/market/4.png",
      "/projects/detailsprojects/market/5.png",
      "/projects/detailsprojects/market/6.png",
      "/projects/detailsprojects/market/7.png",
    ],
    features: [
      "Sistem pencarian produk yang canggih",
      "Integrasi pembayaran yang aman",
      "Dashboard admin yang komprehensif",
      "Sistem rating dan review",
      "Fitur wishlist dan keranjang belanja"
    ]
  },
  {
    id: 2,
    title: "Studi Pemodelan",
    description: "Studi kasus pemodelan untuk distribusi barang dengan 4 peran utama.",
    detailedDescription: "This is a modeling case study project for the distribution of goods, there are 4 roles namely Distributor, Staff, System Admin, and Warehouse Management. Proyek ini mengembangkan model komprehensif untuk mengoptimalkan alur distribusi barang dari produsen hingga konsumen. Dengan mempertimbangkan berbagai peran dan tanggung jawab, model ini memberikan solusi efisien untuk manajemen rantai pasok modern.",
    technologies: ["Figma"],
    image: "/projects/studi.png",
    link: "#",
    slug: "studi-pemodelan",
    gallery: [
      "/projects/detailsprojects/studi/1.png",
      "/projects/detailsprojects/studi/2.png",
      "/projects/detailsprojects/studi/3.png",
      "/projects/detailsprojects/studi/4.png",
      "/projects/detailsprojects/studi/5.png",
      "/projects/detailsprojects/studi/6.png",
      "/projects/detailsprojects/studi/7.png",
      "/projects/detailsprojects/studi/8.png",
      "/projects/detailsprojects/studi/9.png",
    ],
    features: [
      "Dashboard untuk setiap peran",
      "Sistem tracking distribusi barang",
      "Manajemen inventaris",
      "Laporan analitik"
    ]
  },
  {
    id: 3,
    title: "JokiGames & TopUpGames",
    description: "Website joki game dan top up dengan berbagai fitur menarik.",
    detailedDescription: "This is a website for game jockeys and top ups, equipped with many cool features. Platform ini menyediakan layanan joki game profesional dan layanan top up untuk berbagai game populer. Dengan sistem pembayaran yang terintegrasi dengan berbagai metode pembayaran, pelanggan dapat dengan mudah menggunakan layanan ini. Fitur tracking progress joki dan live chat memastikan transparansi dan komunikasi yang baik antara pelanggan dan joki.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"],
    image: "/projects/jokigames.png",
    link: "#",
    slug: "joki-games",
    gallery: [
      "/projects/jokigames.png",
      // "/projects/jokigames-detail1.png",
      // "/projects/jokigames-detail2.png"
    ],
    features: [
      "Sistem order joki game",
      "Top up game dengan berbagai metode pembayaran",
      "Tracking progress joki",
      "Live chat dengan joki",
      "History transaksi"
    ]
  },
  {
    id: 4,
    title: "Ciu Insurance",
    description: "Aplikasi penanganan bank asuransi dengan desain menarik.",
    detailedDescription: "Insurance bank handling application with attractive design and complete features. Aplikasi ini dirancang untuk memudahkan pengelolaan polis asuransi, klaim, dan pembayaran premi. Dengan antarmuka yang intuitif dan fitur yang komprehensif, Ciu Insurance menjadi solusi lengkap untuk industri asuransi modern. Sistem notifikasi real-time dan dashboard analitik membantu pengguna memantau dan mengelola asuransi mereka dengan efisien.",
    technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"],
    image: "/projects/ciudigital.png",
    link: "#",
    slug: "ciu-insurance",
    gallery: [
      "/projects/ciudigital.png",
      // "/projects/ciudigital-detail1.png",
      // "/projects/ciudigital-detail2.png"
    ],
    features: [
      "Manajemen polis asuransi",
      "Klaim online",
      "Pembayaran premi",
      "Notifikasi real-time",
      "Dashboard analitik"
    ]
  },
];

// Data certificates
export const certificates = [
  {
    id: 1,
    title: "PT NARANTRAYA TEKNOLOGI DIGITAL",
    description: "Certificate of completion of Industrial Work Practice",
    issuedBy: "PT Narantraya",
    date: "2024-07-21",
    image: "/certificates/pkl.png",
    link: "https://drive.google.com/file/d/1-91o_3jpjzmoUKd3mXWoFsixi5HwYR8G/view?usp=drive_link",
  },
  {
    id: 2,
    title: " UI-UX RESEARCH AND DESIGN",
    description: "Certificate of Professional Skill",
    issuedBy: "MySkill",
    date: "2025-03-11",
    image: "/certificates/myskill.png",
    link: "https://drive.google.com/file/d/1lx5ePQXxgSrFGlFzEnAiMoaPp98ioHeP/view?usp=drive_link",
  },
  {
    id: 3,
    title: "IGDX Career Seminar",
    description: "Career Guidance For Aspiring Game Developer.",
    issuedBy: "IGDX Career",
    date: "2024-12-18",
    image: "/certificates/igdx.png",
    link: "https://drive.google.com/file/d/1H4aCas-yLXKmizrN3QaRJSN3az9B1KC_/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Front-End with VUE JS",
    description:
      "Front-end Development with The Progressive JavaScript Framework Vue.js",
    issuedBy: "Wanteknologi",
    date: "2023-10-30",
    image: "/certificates/vuejs.png",
    link: "https://drive.google.com/file/d/1BZ3ccpGrEE_2IZWN9KDVR7c1yPTVC-Fx/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Back-End with JavaScript Framework",
    description:
      "Joining the Backend Development with Javascript Framework Training with PT.Laskar Teknologi Mulia (Cyberlabs).",
    issuedBy: "PT Laskar Teknologi Mulia",
    date: "2023-11-10",
    image: "/certificates/express.png",
    link: "https://drive.google.com/file/d/12W30fxT1vpU0nziuJVKOL38qBadhumrg/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Belajar Dasar AI",
    description: "Certification for completing the AI course Dicoding.",
    issuedBy: "Dicoding",
    date: "2024-11-30",
    image: "/certificates/dicai.png",
    link: "https://drive.google.com/file/d/1Q59lDUnG8LaOrxpwZ5RvG_SQCmEzvF_E/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description:
      "Certification for completing the Frontend Web course Dicoding.",
    issuedBy: "Dicoding",
    date: "2023-11-24",
    image: "/certificates/dicfepml.png",
    link: "https://drive.google.com/file/d/1moE3wdslssz-TDvWTeP0tqq5URyqv9S5/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description: "Certification for completing the AWS course Dicoding.",
    issuedBy: "Dicoding",
    date: "2023-11-25",
    image: "/certificates/dicaws.png",
    link: "https://drive.google.com/file/d/1i89m11ZocSTqaQk8AhiPsxFJ6HxYZ3xq/view?usp=drive_link",
  },
  {
    id: 9,
    title: "Belajar Dasar Pemrograman JavaScript",
    description: "Certification for completing the JS course Dicoding.",
    issuedBy: "Dicoding",
    date: "2025-01-24",
    image: "/certificates/dicjs.png",
    link: "https://drive.google.com/file/d/1D8sIA-4zFwJpjtkPoI_LbADspGeRBZzG/view?usp=drive_link",
  },
  // {
  //   id: 10,
  //   title: "Belajar Dasar Pemrograman JavaScript",
  //   description: "Certification for completing the JS course Dicoding.",
  //   issuedBy: "Dicoding",
  //   date: "2025-01-24",
  //   image: "/certificates/dicjs.png",
  //   link: "https://drive.google.com/file/d/1D8sIA-4zFwJpjtkPoI_LbADspGeRBZzG/view?usp=drive_link",
  // },
];

// Data skill categories dengan level
export const skillCategories = {
  frontend: [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-3xl" style={{ color: "#E34F26" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/NBZ9Ro6UKV8?si=anv9JNlwERFgbgYs",
    },
    {
      title: "CSS Dasar",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/CleFk3BZB3g?si=bHSaWGWhmobTJkJk",
    },
    {
      title: "CSS Layouting",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/Phn2eN6j0pg?si=2wB6RlRNuti15h6F",
    },
    {
      title: "CSS 3",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/J0a6YUUAsd4?si=zrLHkVnuUtxh6HPF",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="text-3xl" style={{ color: "#7952B3" }} />,
      level: "(Expert)",
      link: "https://youtu.be/NNW7Tg8CgAQ?si=VK75AFRAKvpdY-ka",
    },
    {
      title: "Flexbox CSS",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/-J372iDFU8Y?si=0pcuU0M5Wc_lPRQX",
    },
    {
      title: "Git & Github",
      icon: <FaGitAlt className="text-3xl" style={{ color: "#F05032" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/lTMZxWMjXQU?si=vCEvxTii1xyvqbPb",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl" style={{ color: "#38B2AC" }} />,
      level: "(Expert)",
      link: "https://youtu.be/z3slaXqmkT0?si=0ry07V0kfVoIi5YJ",
    },
    {
      title: "Javascript Dasar",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/RUTV_5m4VeI?si=W-U4ST5QB956NnWQ",
    },
    {
      title: "Javascript DOM",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/aT60R1cySLM?si=7vqd6Db69luwZOwh",
    },
    {
      title: "Javascript Lanjutan",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/RwT41El778A?si=JyMGc59VfCIwIHjC",
    },
    {
      title: "React JS",
      icon: <FaReact className="text-3xl" style={{ color: "#61DAFB" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/rNSfMxMPWqc?si=5KZ3c27jOKvy81cT",
    },
    {
      title: "Typescript",
      icon: <SiTypescript className="text-3xl" style={{ color: "#3178C6" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/C_C64faSO4c?si=9Yni67BMYGsauJJc",
    },
    {
      title: "React Typescript",
      icon: <SiTypescript className="text-3xl" style={{ color: "#3178C6" }} />,
      level: "(Intermediate)",
      link: "https://www.youtube.com/live/0gHQK9J8zMU?si=aJlG_fCh9ZtZK1aN",
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs className="text-3xl" style={{ color: "#D1D5DB" }} />,
      level: "Mastery/Spesialis",
      link: "https://youtu.be/zw5wKyqDEUc?si=RvK6843Q7zePC2Fb",
    },
  ],
  backend: [
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-3xl" style={{ color: "#339933" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/sSLJx5t4OJ4?si=jfxz8nkjzwwINZmPl",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-3xl" style={{ color: "#1F2937" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/TecGUz4bPFA?si=yWwMZYhChA-K5VRA",
    },
    {
      title: "RESTful APIs",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/vQJJ_K1JbEA?si=dy9JykPJDto57wVy",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-3xl" style={{ color: "#47A248" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/JXXUBiJGu94?si=-91qcpHto0v1FeZV",
    },
    {
      title: "SQL",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/OfrTiLzHv3g?si=yZDahChdRYL3pz0k",
    },
    {
      title: "Authentication",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Expert)",
      link: "https://youtu.be/9ed3b0tSRvI?si=sw2OBdHmXPWI4geB",
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-3xl" style={{ color: "#2496ED" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/3_yxVjV88Zk?si=SNsVdxvgzANJaMJH",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className="text-3xl" style={{ color: "#E10098" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/IGZr3_yMSMA?si=HzKSRL1qxGY4SNCv",
    },
  ],
};
