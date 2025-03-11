import { SrcEnum } from "@/utilities/enum";
import { ExperienceType, ProjectType, TechType } from "@/utilities/type";
import { HTML5, CSS3, JavaScript, Java, TypeScript, PHP, Go, NextJs, TailwindCSS, Bootstrap5, ExpressJsLight, MySQL, MongoDB, SvelteJS, NestJS } from "developer-icons";
import * as imgProj from "@/img/project"

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
        img: NestJS,
        title: "NestJS",
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
        stack: ["NextJS", "TailwindCSS", "ExpressJS", "MySQL"],
        main: true,
        src: [{src: SrcEnum.GITHUB, link: "https://github.com/mickie2k/simhouse-frontend/", title: "Frontend"},{src: SrcEnum.GITHUB, link: "https://github.com/mickie2k/simhouse-backend/", title: "Backend"}],
        img: [imgProj.Simhouse1,imgProj.Simhouse2,imgProj.Simhouse3,imgProj.Simhouse4,imgProj.Simhouse5,imgProj.Simhouse6,imgProj.Simhouse7,imgProj.Simhouse8,imgProj.Simhouse9]
        

    },
    {
        title: "Fashion Recommendation For Ecommerce",
        description: "Developed as part of coursework to apply and optimize a Fashion Recommendation AI system, integrating it into an e-commerce clothing store website.",
        link: "",
        stack: ["Svelte", "FastAPI"],
        main : true,
        src: [{src: SrcEnum.GITHUB, link: "https://github.com/mickie2k/Fashion-Recommendation-System-Frontend-CS-KMITL", title: "Frontend"},{src: SrcEnum.GITHUB, link: "https://github.com/NongFeen/Fashion-Product-Recommendation-System", title: "Backend"}],
        img: [imgProj.Fashion1,imgProj.Fashion2,imgProj.Fashion3,imgProj.Fashion3_1 ,imgProj.Fashion4,imgProj.Fashion5,imgProj.Fashion6]
    },
    {   
        title: "F1 Standings Mobile Application",
        description: "Displays F1 driver and constructor standings for each year, with data fetched from the Ergast API F1.",
        link: "",
        stack: ["Kotlin", "Android Studio"],
        main : true,
      
    },
    {
        title: "Looterz Board Game Online",
        description: "The project aims to bring the existing board game to the web, enabling players to enjoy it online with friends. Project is still in progress",
        link: "",
        stack: ["NextJS", "TailwindCSS", "Go Fiber", "MySQL"],
        main : true,
        src: [{src: SrcEnum.GITHUB, link: "https://github.com/SkylabMak/LOOTERZ", title: "Frontend"},{src: SrcEnum.GITHUB, link: "https://github.com/SkylabMak/LOOTERZ_backend", title: "Backend"}],
        img: [imgProj.Looterz1,imgProj.Looterz2,imgProj.Looterz3,imgProj.Looterz4]

    },
    {
        title: "Dormi (Prototype)",
        description: "This Project is subject Database and Software Engineer. Dormi is Website For Renting a Dorm with Contract. This project is a prototype. We design er-diagram and implement database on oracle. We also design the website using Figma.",
        link: "",
        stack: ["Figma", "Oracle"],
        main : false,
        src: [],
        img: [imgProj.Dormi1,imgProj.Dormi2,imgProj.Dormi3,imgProj.Dormi4,imgProj.DormiER]
        
        
    },
    {
        title: "Authentication System with JWT, Local Authentication and Google OAuth2 (Learning)",
        description: "This work is an authentication system that implements both Local Authentication and Google OAuth2, using JWT tokens for session management. The goal is to learning how to utilize JWT tokens for session management with different strategies.",
        link: "",
        stack: ["NestJS", "PassportJS", "DrizzleORM", "MySQL"],
        main : false,
        src: [{src: SrcEnum.GITHUB, link: "https://github.com/mickie2k/user-management-backend", title: "Source"}],
       
    }


]