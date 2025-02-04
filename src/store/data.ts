import { ExperienceType, ProjectType, TechType } from "@/utilities/type";
import { HTML5, CSS3, JavaScript, Java, TypeScript, PHP, Go, NextJs, TailwindCSS, Bootstrap5, ExpressJsLight, MySQL, MongoDB, SvelteJS } from "developer-icons";

export const techStack: TechType[] = [
    {
        img: HTML5,
        title: "HTML5",
    },
    {
        img: CSS3,
        title   : "CSS3",
    },
   
    {
        img: JavaScript,
        title: "Javascript",
    },
    {
        img: TypeScript,
        title: "Typescript",
    },
    
    {
        img: Java,
        title: "Java",
    },
    {
        img: PHP,
        title: "PHP",
    },
    {
        img: Go,
        title: "Golang",
    },
    {
        img: NextJs,
        title: "NextJS",
    },
    {
        img: SvelteJS,
        title: "SvelteJS",
    },
    {
        img: TailwindCSS,
        title: "TailwindCSS",
    },
    {
        img: Bootstrap5,
        title: "Bootstrap",
    },
    {
        img: ExpressJsLight,
        title: "ExpressJS",
    },
    {
        img: MySQL,
        title: "MySQL",
    },
    {
        img: MongoDB,
        title: "MongoDB",
    },
];


export const experience: ExperienceType[] = [
    {
        title: "Semi-Finalist | MED X Engineering Hackathon: Together Toward the Future",
        description: ["Developed 'Start-to-Finish', an innovative medical screening and emergency response system to improve healthcare accessibility in underserved communities", "Designed a mobile app integrating hospital selection, real-time bed availability tracking, and emergency triage systems based on severity."],
        duration: "04.2024"
    },
    {
        title: "Front End Developer For CSCamp16",
        description: ["Developed the schedule feature for the CSCamp16 website using Next.js. Designed and implemented an intuitive and responsive interface, enabling users to view and interact with the event schedule seamlessly."],
        duration: "2023 - 2024"
    },
    {
        title: "Freelance Developer For Tyholiday Villa Pattaya",
        description: ["Designed, developed, and launched tyholiday.com, a responsive website for TyHoliday Villa using HTML, JavaScript, CSS, PHP, and MySQL.", "Managed domain registration through Cloudflare and configured DNS settings to ensure seamless integration with the web server provided by Dragonhispeed."],
         duration: "2021 - 2022",
         link: "https://www.tyholiday.com"
    }


]


export const projects: ProjectType[] = [
    {
        title: "Simhouse Web Application",
        description: "SimHouse is a platform designed for Simracers. It allows two main user groups owners and renters to interact seamlessly.",
        link: "",
        stack: ["NextJS", "TailwindCSS", "ExpressJS", "MySQL"]

    },
    {
        title: "Fashion Recommendation For Ecommerce",
        description: "Developed as part of coursework to apply and optimize a Fashion Recommendation AI system, integrating it into an e-commerce clothing store website.",
        link: "",
        stack: ["Svelte", "FastAPI"]
    },
    {   
        title: "F1 Standings Mobile Application",
        description: "Displays F1 driver and constructor standings for each year, with data fetched from the Ergast API F1.",
        link: "",
        stack: ["Kotlin", "Android Studio"]
    },
    {
        title: "Looterz Board Game Online",
        description: "The project aims to bring the existing board game to the web, enabling players to enjoy it online with friends. Project is still in progress",
        link: "",
        stack: ["NextJS", "TailwindCSS", "Go Fiber", "MySQL"]

    }


]