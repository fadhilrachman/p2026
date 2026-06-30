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
  headline: "Fullstack Developer | React (Next.js) | Node.js | TypeScript",
  shortDescription:
    "I build clean, scalable, and user-friendly web applications using modern frontend and backend technologies.",
  location: "Jakarta, Indonesia",
  currentCompany: "Arnatech",
  linkedinUrl: "https://www.linkedin.com/in/fadhil-rahman-856096247/",
  cta: {
    primary: "View Projects",
    secondary: "Contact Me",
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
      "Frontend development using Next.js for internal business operations.",
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
    tech: ["next", "react", "typescript", "tailwind"],
  },
  {
    name: "Indonesia Travel",
    image: "https://storage.arnatech.id/46ad0e99-e439-4931-9e3c-bee1b0ee3caf",
    description:
      "CMS-driven public tourism platform using .NET and Optimizely CMS.",
    gradient: ["#047857", "#84CC16"],
    url: "https://www.indonesia.travel/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Icownic",
    image: "https://storage.arnatech.id/181b0620-0f59-4084-849e-47fe1b44d26a",
    description:
      "Responsive frontend slicing from UI designs using Tailwind CSS.",
    gradient: ["#7C2D12", "#F97316"],
    url: "https://icownicpath.com",
    tech: ["html", "css", "javascript", "tailwind"],
  },
];

export const SKILLS = {
  frontend: ["javascript", "react", "next", "typescript", "tailwind", "html", "css"],
  userInterface: ["figma"],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Freelance frontend development at Magnus using React.js, Next.js, TypeScript, Tailwind CSS, and REST APIs.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Full-time software developer at Arnatech, building modern frontend applications with Nuxt.js, Vue.js, TypeScript, Ant Design, and REST APIs.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked at Bahawan Integrasi Nusantara on Next.js, TypeScript, Chakra UI, Formik, Zustand, and API integration.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Sliced Figma designs into responsive React.js interfaces at Sagara Technology using Bootstrap, Ant Design, Axios, and JavaScript.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started Programming",
    size: ItemSize.SMALL,
    subtitle:
      "Started learning programming in August 2021 and built a foundation in frontend and fullstack web development.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
