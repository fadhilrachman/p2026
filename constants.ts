// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Fadhil Rahman",
  description:
    "Fullstack Developer focused on clean, scalable, and user-friendly web applications using modern frontend and backend technologies.",
  siteUrl: "https://www.linkedin.com/in/fadhil-rahman-856096247/",
};

export const HOME = {
  name: "Fadhil Rahman",
  job: "Fullstack Developer",
  headline: "Fullstack Developer",
  shortDescription:
    "I build clean, scalable, and user-friendly web applications using modern frontend and backend technologies.",
  location: "Jakarta, Indonesia",
  currentCompany: "Arnatech",
  linkedinUrl: "https://www.linkedin.com/in/fadhil-rahman-856096247/",
  cvUrl: "/cv-fadhil-rahman.pdf",
  cta: {
    primary: "View Projects",
    secondary: "Download CV",
  },
};

export const ABOUT = {
  title: "About Me",
  description:
    "I am a Full-time and Freelance Fullstack Developer with experience in slicing UI/UX designs into responsive web interfaces and integrating them with backend systems.",
  summary:
    "I focus on building web applications that are clean, responsive, scalable, and easy to use. My work covers frontend development, API integration, CMS-based development, and fullstack web application development.",
  highlights: [
    "3+ years of experience in software development",
    "Experienced in frontend and fullstack web development",
    "Strong experience with React.js, Next.js, TypeScript, and Tailwind CSS",
    "Experienced in API integration, CMS implementation, and responsive UI development",
  ],
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build fullstack web applications",
  "I develop responsive frontend interfaces",
  "I integrate APIs and CMS-driven experiences",
  "I work with React, Next.js, Node.js, and TypeScript",
];

export const EMAIL = "";

export const SOCIAL_LINKS = {
  linkedin: HOME.linkedinUrl,
  topmate: HOME.linkedinUrl,
};

export interface IProject {
  name: string;
  image: string;
  blurImage?: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "EMS Arnatech",
    image: "https://storage.arnatech.id/6287abb7-1fe5-4831-a7ae-7a1a6da029fa",
    description:
      "Built the frontend for an AI-powered employee monitoring platform with KPI tracking, smart attendance, and productivity insights.",
    gradient: ["#0F766E", "#14B8A6"],
    url: "https://ems.arnatech.id",
    tech: ["next", "react", "typescript"],
  },
  {
    name: "Escrow SG",
    image: "https://storage.arnatech.id/494081ef-48e5-4568-8d8c-e30a0145e607",
    description:
      "Modern responsive escrow service platform built with Next.js.",
    gradient: ["#1D4ED8", "#38BDF8"],
    url: "https://www.escrowsg.com/",
    tech: ["next", "react", "typescript", "tailwind", "Wix"],
  },
  {
    name: "Indonesia Travel",
    image: "https://storage.arnatech.id/46ad0e99-e439-4931-9e3c-bee1b0ee3caf",
    description:
      "CMS-driven public tourism platform using .NET and Optimizely CMS.",
    gradient: ["#047857", "#84CC16"],
    url: "https://www.indonesia.travel/",
    tech: [".NET", "Optimizely CMS", "C#", "JavaScript"],
  },
  {
    name: "Icownic",
    image: "https://storage.arnatech.id/181b0620-0f59-4084-849e-47fe1b44d26a",
    description:
      "Responsive frontend slicing from UI designs using Tailwind CSS.",
    gradient: ["#7C2D12", "#F97316"],
    url: "https://www.icownicpatch.com/",
    tech: ["React Js", "css", "javascript", "tailwind"],
  },
  {
    name: "CMS BKN",
    image: "https://storage.arnatech.id/a525bc3f-b50f-4ba9-ac47-459698cf0ace",
    description: "Fullstack CMS development using Next.js and Express JS.",
    gradient: ["#4338CA", "#06B6D4"],
    url: "https://www.bisnisnaikkelas.com/",
    tech: ["next", "react", "typescript", "Express JS"],
  },
    {
    name: "Pertamina Learning HUB",
    image: "https://ap-south-1.linodeobjects.com/arnatech/2025/12/GcGR0ZG4-screenshot-1765456819350-1280x573.png",
    description: "Fullstack LMS using .NetS.",
    gradient: ["#4338CA", "#06B6D4"],
    // url: "https://www.bisnisnaikkelas.com/",
    tech: [".Net", "PostgreQL", "HTML", "JS"],
  },
      {
    name: "CRM Internal Application",
    image: "https://ap-south-1.linodeobjects.com/arnatech/2025/01/IMG_2446-1280x908.jpeg",
    description: "Responsible in Frontend using React Js, Antd & Tailwind.",
    gradient: ["#4338CA", "#06B6D4"],
    // url: "https://www.bisnisnaikkelas.com/",
     tech: ["React Js", "css", "javascript", "Tailwind", "Antd"],
  },
];

export const SKILLS = {
  frontend: [
    "html",
    "css",
    "sass",
    "bootstrap",
    "tailwind",
    "chakra-ui",
    "javascript",
    "php",
    "react",
    "next",
    "redux",
    "typescript",
    "vue",
  ],
  backend: [
    "node",
    "express",
    "nestjs",
    "laravel",
    "golang",
    "python",
    "django",
  ],
  database: ["postgresql", "sql", "mysql", "mongodb"],
};

export interface IExperience {
  title: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  workType: string;
  description: string[];
  techStack: string[];
}

export const EXPERIENCES: IExperience[] = [
  {
    title: "Software Developer",
    company: "Arnatech",
    employmentType: "Full-time",
    startDate: "Aug 2024",
    endDate: "Present",
    duration: "1 yr 11 mos",
    location: "Bandung, West Java, Indonesia",
    workType: "On-site",
    description: [
      "Developed modern client-rendered frontend applications using Nuxt.js.",
      "Implemented responsive and user-friendly interfaces using Ant Design.",
      "Worked on frontend feature development, API integration, and UI improvements.",
      "Collaborated with the team to maintain performance, usability, and code quality.",
    ],
    techStack: ["Nuxt.js", "Vue.js", "TypeScript", "Ant Design", "REST API"],
  },
  {
    title: "Frontend Developer",
    company: "Magnus",
    employmentType: "Freelance",
    startDate: "Jul 2025",
    endDate: "Dec 2025",
    duration: "6 mos",
    location: "Jakarta, Indonesia",
    workType: "Remote",
    description: [
      "Developed CMS-driven pages and components using .NET and Optimizely CMS.",
      "Implemented responsive frontend views from provided UI requirements.",
      "Integrated structured CMS content with Razor views and backend logic.",
      "Maintained clean component structure for easier content and feature updates.",
    ],
    techStack: [".NET", "Optimizely CMS", "C#", "Razor", "JavaScript"],
  },
  {
    title: "Full Stack Engineer",
    company: "Bahawan Integrasi Nusantara",
    employmentType: "Full-time",
    startDate: "Jun 2023",
    endDate: "Aug 2024",
    duration: "1 yr 3 mos",
    location: "Pancoran Mas, West Java, Indonesia",
    workType: "On-site",
    description: [
      "Integrated backend APIs into web applications using Next.js and TypeScript.",
      "Developed frontend interfaces with Chakra UI, Formik, and Zustand.",
      "Worked on fullstack features, including frontend implementation and data flow integration.",
      "Improved application usability through responsive UI and structured state management.",
    ],
    techStack: ["Next.js", "TypeScript", "Chakra UI", "Formik", "Zustand", "REST API"],
  },
  {
    title: "Frontend Developer",
    company: "Sagara Technology",
    employmentType: "Full-time",
    startDate: "Mar 2022",
    endDate: "Jul 2022",
    duration: "5 mos",
    location: "Kecamatan Gedebage, West Java, Indonesia",
    workType: "On-site",
    description: [
      "Sliced Figma designs into interactive web interfaces using React.js.",
      "Built responsive frontend pages using Bootstrap and Ant Design.",
      "Integrated backend APIs into web applications using Axios.",
      "Implemented UI components and managed frontend state for application features.",
    ],
    techStack: ["React.js", "Bootstrap", "Ant Design", "Axios", "JavaScript"],
  },
];

export const GTAG = "UA-163844688-1";
