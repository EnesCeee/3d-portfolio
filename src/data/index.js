import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Social",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "incursor technology",
    date: "Mar 2023 - Dec 2023",
    details: [
      "Worked on <span style='color: white;'>software development</span> projects as a full-time developer.",
      "Developed <span style='color: white;'>various projects</span> using API, Mobile Application Development, and other technologies.",
      "Worked in a <span style='color: white;'>flexible and efficient</span> remote work environment.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Başarsoft Information Technologies Inc.",
    date: "Jul 2021 - Sep 2021",
    details: [
      "Participated in <span style='color: white;'>software development</span> processes as an intern.",
      "Gained experience in <span style='color: white;'>various projects</span> using API, Java, and other technologies.",
      "Enhanced team collaboration and project management skills in a <span style='color: white;'>professional work environment</span>.",
    ],
  },
  {
    title: "Computer Engineering",
    company_name: "Kirikkale University",
    date: "Jan 2018 - Feb 2023",
    details: [
      "Completed my <span style='color: white;'>bachelor's degree</span> in Computer Engineering.",
      "Received comprehensive education in software development, algorithm analysis, and <span style='color: white;'>computer science</span>.",
      "Strengthened engineering skills by developing <span style='color: white;'>various academic and practical projects</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "Amadeus C++ Bootcamp",
    description:
      "Gained expertise in C++ programming language and related technologies by participating in the Amadeus C++ Bootcamp organized by Coderspace.",
    image: oscs,
  },
  {
    name: "Mobile Application Development",
    description:
      "Designed and developed user experience-focused applications by participating in various mobile application development projects.",
    image: devnotes,
  },
  {
    name: "API Development Projects",
    description:
      "Gained experience in data management and system integration by working on API development projects for backend systems.",
    image: algorithms,
  },
];

export { experiences, portfolio };

