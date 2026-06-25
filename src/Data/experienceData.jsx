import { IoLogoFigma } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";
import { SiNetlify } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";

const CursorIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor" viewBox="1.5 2 21 21">
        <path d="m20.42,6.73L12.42,2.11c-.26-.15-.57-.15-.83,0L3.58,6.73c-.22.12-.35.36-.35.61v9.32c0,.25.13.48.35.61l8.01,4.62c.26.15.57.15.83,0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61h0Zm-.5.98h0s-7.73,13.39-7.73,13.39c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43l-7.59-4.38c-.09-.05-.05-.19.05-.19h15.46c.22,0,.36.24.25.43Z" />
    </svg>
);

const experiences = [
    {
        id: 1,
        title: "Developer",
        company: "Classified",
        companyClass: "exp-span es1",
        subtitle: "Stealth, Full-Time | Mar 26 - Present",
        active: true,
        description: [],
        stack: [],
    },
    {
        id: 2,
        title: "UI & Graphic Designer",
        company: "Freelancer",
        companyClass: "exp-span",
        subtitle: "Remote, Part-Time | Jul 24 - Feb 26",
        active: false,
        description: [
            "Designed responsive websites across multiple platforms with a 98% client satisfaction rate.",
            "Optimized UI and site layouts, increasing average user engagement by 35% for global clients.",
        ],
        stack: [
            { title: "Cursor AI", icon: CursorIcon },
            { title: "Figma", icon: IoLogoFigma },
            { title: "Python", icon: FaPython },
            { title: "Framer", icon: PiFramerLogoFill },
            { title: "Adobe Suite", icon: BiLogoAdobe },
            { title: "Netlify", icon: SiNetlify },
            { title: "Vercel", icon: RiVercelFill },
        ],
    },
];

export default experiences;