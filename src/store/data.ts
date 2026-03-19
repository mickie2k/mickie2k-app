import { SrcEnum } from "@/utilities/enum";
import { ExperienceType, ProjectType, TechType } from "@/utilities/type";
import {
    HTML5,
    CSS3,
    JavaScript,
    Java,
    TypeScript,
    PHP,
    Go,
    NextJs,
    TailwindCSS,
    Bootstrap5,
    ExpressJsLight,
    MySQL,
    MongoDB,
    SvelteJS,
    NestJS,
} from "developer-icons";
import * as imgProj from "@/img/project";

export const techStack: TechType[] = [
    {
        img: HTML5,
        title: "HTML5",
    },
    {
        img: CSS3,
        title: "CSS3",
    },

    {
        img: JavaScript,
        title: "JavaScript",
    },
    {
        img: TypeScript,
        title: "TypeScript",
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
        title: "Go",
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
        title: "Software Engineer Intern | Omise",
        description: [
            "Researched and developed a proof-of-concept Jira-to-GitHub pull request workflow using AI tools and automation, reducing small-task development cycle time from 3 days to 1 day.",
            "Architected a scalable, production-ready Jira-to-GitHub pipeline with an API server and AI planner to transform Jira context into structured execution plans.",
            "Developed payment microservices for JCB, Mastercard, and Visa networks using Go, Ruby on Rails, and gRPC.",
            "Improved Visa clearing throughput by increasing batch size and resolving gRPC message-size and memory bottlenecks to support peak daily transaction volumes.",
        ],
        duration: "June 2025 - Present",
    },
    {
        title: "Semi-Finalist | MED x Engineering Hackathon: Together Toward the Future",
        description: [
            'Developed "Start-to-Finish", a medical screening and emergency response concept aimed at improving healthcare accessibility in underserved communities.',
            "Designed a mobile app flow featuring hospital selection, real-time bed availability tracking, and severity-based emergency triage.",
        ],
        duration: "04.2024",
    },
    {
        title: "Frontend Developer | CSCamp16",
        description: [
            "Built the schedule feature for the CSCamp16 website using Next.js, delivering an intuitive and responsive experience for browsing and interacting with event sessions.",
        ],
        duration: "September 2023 - April 2024",
    },
    {
        title: "Freelance Web Developer | TyHoliday Villa Pattaya",
        description: [
            "Designed, developed, and launched tyholiday.com, a responsive website for TyHoliday Villa using HTML, CSS, JavaScript, PHP, and MySQL.",
            "Managed domain registration with Cloudflare and configured DNS settings for reliable production deployment.",
        ],
        duration: "2021 - 2022",
        link: "https://www.tyholiday.com",
    },
];

export const projects: ProjectType[] = [
    {
        title: "Simhouse Web Application",
        description:
            "Built an Airbnb-style C2C marketplace for sim-racing where owners can list simulators and set pricing while renters can discover, book, and review nearby simulators. Added interactive location discovery with Google Maps API and country-wide filtering, integrated Google OAuth2 for secure login, and implemented direct client-to-S3 image uploads with pre-signed URLs for scalable media handling.",
        link: "",
        stack: ["NextJS", "NestJS", "PrismaORM", "PostgreSQL", "Amazon S3"],
        main: true,
        src: [
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/mickie2k/simhouse-frontend/",
                title: "Frontend",
            },
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/mickie2k/simhouse-backend/",
                title: "Backend",
            },
        ],
        img: [
            imgProj.Simhouse1,
            imgProj.Simhouse2,
            imgProj.Simhouse3,
            imgProj.Simhouse4,
            imgProj.Simhouse5,
            imgProj.Simhouse6,
            imgProj.Simhouse7,
            imgProj.Simhouse8,
            imgProj.Simhouse9,
        ],
    },
    {
        title: "Fashion Recommendation For Ecommerce",
        description:
            "Developed as part of coursework to apply and optimize a Fashion Recommendation AI system, integrating it into an e-commerce clothing store website.",
        link: "",
        stack: ["Svelte", "FastAPI"],
        main: true,
        src: [
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/mickie2k/Fashion-Recommendation-System-Frontend-CS-KMITL",
                title: "Frontend",
            },
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/NongFeen/Fashion-Product-Recommendation-System",
                title: "Backend",
            },
        ],
        img: [
            imgProj.Fashion1,
            imgProj.Fashion2,
            imgProj.Fashion3,
            imgProj.Fashion3_1,
            imgProj.Fashion4,
            imgProj.Fashion5,
            imgProj.Fashion6,
        ],
    },
    {
        title: "F1 Standings Mobile Application",
        description:
            "Displays F1 driver and constructor standings for each year, with data fetched from the Ergast API F1.",
        link: "",
        stack: ["Kotlin", "Android Studio"],
        main: true,
    },
    {
        title: "Looterz Board Game Online",
        description:
            "The project aims to bring the existing board game to the web, enabling players to enjoy it online with friends. Project is still in progress",
        link: "",
        stack: ["NextJS", "TailwindCSS", "Go Fiber", "MySQL"],
        main: true,
        src: [
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/SkylabMak/LOOTERZ",
                title: "Frontend",
            },
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/SkylabMak/LOOTERZ_backend",
                title: "Backend",
            },
        ],
        img: [
            imgProj.Looterz1,
            imgProj.Looterz2,
            imgProj.Looterz3,
            imgProj.Looterz4,
        ],
    },
    {
        title: "Dormi (Prototype)",
        description:
            "This Project is a part of Database and Software Engineer course. Dormi is Website For Renting a Dorm with Contract. This project is a prototype. We design er-diagram and implement database on oracle. We also design the website using Figma.",
        link: "",
        stack: ["Figma", "Oracle"],
        main: false,
        src: [],
        img: [
            imgProj.Dormi1,
            imgProj.Dormi2,
            imgProj.Dormi3,
            imgProj.Dormi4,
            imgProj.DormiER,
        ],
    },
    {
        title: "Blog Application with Authentication System: JWT, Local and Google OAuth2",
        description:
            "This work is an authentication system that implements both Local Authentication and Google OAuth2, using JWT tokens for session management. The goal is to learning how to utilize JWT tokens for session management with different strategies.",
        link: "",
        stack: ["NestJS", "PassportJS", "DrizzleORM", "MySQL"],
        main: false,
        src: [
            {
                src: SrcEnum.WEBSITE,
                link: "https://blog.mickie2k.com",
                title: "Website",
            },
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/mickie2k/blog-webapplication-frontend",
                title: "Frontend",
            },
            {
                src: SrcEnum.GITHUB,
                link: "https://github.com/mickie2k/blog-webapplication-backend",
                title: "Backend",
            },
        ],
    },
];
