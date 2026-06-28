import { BsJavascript, BsCss } from "react-icons/bs";
import roxo from "../assets/roxo.webp";
import pera from "../assets/pera.webp";
import paso from "../assets/paso.webp";

const projectsData = [
    {
        id: 1,
        head: "Roxo",
        image: roxo,
        url_live: "https://roxo-ascii-player.vercel.app/",
        url_github: "https://github.com/ayushxpundir/ROXO",
        description: "A high-performance, browser-based digital scanning application that translates live video feeds into structural ASCII character arrays in real-time.",
        technologies: [
            { icon: <BsJavascript />, name: "JavaScript" },
        ],
    },
    {
        id: 2,
        head: "Paso",
        image: paso,
        url_live: "https://paso-password-generator.vercel.app/",
        url_github: "https://github.com/ayushxpundir/Paso",
        description: "Paso is a ultra-sleek, privacy-first web utility designed to generate mathematically randomized, brute-force resilient passwords instantly.",
        technologies: [
            { icon: <BsJavascript />, name: "JavaScript" },
        ],
    },
    {
        id: 3,
        head: "Pera",
        image: pera,
        url_live: "https://pera-bookmark-manager.vercel.app/",
        url_github: "https://github.com/ayushxpundir/Pera",
        description: "A clean, fast, and personal bookmark manager to organize everything you save on the web. No accounts, no clutter, no distractions.",
        technologies: [
            { icon: <BsJavascript />, name: "JavaScript" },
        ],
    },
    // 👉 Add new projects here as objects, following the same format
];

export default projectsData;