import {  RiVercelFill } from "react-icons/ri";
import {  SiNetlify } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import FramerSolidIcon from '@iconify-react/teenyicons/framer-solid';
import CursorIcon from '@iconify-react/simple-icons/cursor';
import PythonFillIcon from '@iconify-react/akar-icons/python-fill';
import PhotoshopIcon from '@iconify-react/devicon-plain/photoshop';


const experiences = [
    {
        id: 1,
        title: "Developer",
        company: "Classified",
        companyClass: "exp-span es1",
        subtitle: "Stealth, Full-Time | Mar 26 — Present",
        active: true,
        description: [],
        stack: [],
    },
    {
        id: 2,
        title: "UI & Graphic Designer",
        company: "Freelancer",
        companyClass: "exp-span",
        subtitle: "Remote, Part-Time | Jul 24 — Feb 26",
        active: false,
        description: [
            "Designed responsive websites across multiple platforms with a 98% client satisfaction rate. Optimized UI and site layouts, increasing average user engagement by 35% for global clients.",
            "",
        ],
        stack: [
            { title: "Cursor AI", icon: CursorIcon },
            { title: "Python", icon: PythonFillIcon },
            { title: "Framer", icon: FramerSolidIcon },
            { title: "Photoshop", icon: PhotoshopIcon },
            { title: "Netlify", icon: SiNetlify },
            { title: "Figma", icon: IoLogoFigma },
            { title: "Vercel", icon: RiVercelFill },
        ],
    },
];

export default experiences;