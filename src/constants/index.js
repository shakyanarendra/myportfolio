import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  python,
  prisma1,
  next,
  express,
  cplus,
  jnv,
  manit,
  notesapp,
  restaurant,
  techtrackai,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Education",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "prisma",
    icon: prisma1,
  },
];

const experiences = [
  {
    title: "B.Tech",
    percentage: "8.98 CGPA",
    iname: "Maulana Azad National Institute of Technology (MANIT) Bhopal",
    icon: manit,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Currently pursuing B.Tech in Electrical Engineering.",
      "Learning modern web technologies like C++, React.js,Next.js, Node.js, and Three.js.",
      "Worked on various academic and personal development projects.",
      "Participated in coding challenges, and group projects.",
    ],
  },
  {
    title: "Higher Secondary Education (12th Grade)",
    percentage: "90.00 %",
    iname: "Jawahar Navodaya Vidyalaya Bhind MP",
    icon: jnv,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Completed 12th grade with a focus on Physics, Chemistry, and Mathematics (PCM).",
      "Built a strong foundation in logical thinking and problem-solving.",
      "Developed interest in programming and explored basics of web development independently.",
    ],
  },
  {
    title: "Secondary Education (10th Grade)",
    percentage: "92.80 %",
    iname: "Jawahar Navodaya Vidyalaya Bhind MP",
    icon: jnv,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "Completed 10th grade with a solid foundation in core subjects.",
      "Developed interest in technology and problem-solving.",
      "Participated in science fairs and extracurricular tech activities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TechTrack AI",
    description:
      "AI-powered web application built with Next.js that helps users explore trending technologies, track progress in various tech domains, and receive personalized AI-driven suggestions to enhance their learning journey.",

    // Next JS, Tailwind, Gemini AI, Prisma, Shadcn UI
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "green-text-gradient",
      },
    ],
    image: techtrackai,
    source_code_link: "https://techtrackai-iqip.vercel.app/",
  },
  {
    name: "Restaurant Website",
    description:
      "Web application developed to provide users with an intuitive platform for exploring restaurant details, browsing menus, and easily accessing contact and location information, offering a smooth and informative user experience.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Zod",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://foodizapp.onrender.com/",
  },
  {
    name: "SmartNotes App",
    description:
      "SmartNotes is a web-based application that enables users to securely create, organize, and manage personal notes with a clean interface, powerful search functionality, and reliable cloud storage for easy access anytime, anywhere.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: notesapp,
    source_code_link: "https://notes-frontend-five-henna.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
