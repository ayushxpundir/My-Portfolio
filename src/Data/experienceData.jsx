import { BsTypescript } from "react-icons/bs";
import { FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiGnubash, SiNpm, SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import PostgresqlIcon from '@iconify-react/simple-icons/postgresql';
import BaselineAdobeIcon from '@iconify-react/ic/baseline-adobe';
import FramerSolidIcon from '@iconify-react/teenyicons/framer-solid';
import ReactFillIcon from '@iconify-react/akar-icons/react-fill';
import NextjsIcon from '@iconify-react/devicon-plain/nextjs';
import VscodeIcon from '@iconify-react/codicon/vscode';
import CursorIcon from '@iconify-react/simple-icons/cursor';
import AdobeSolidIcon from '@iconify-react/streamline/adobe-solid';
import PythonFillIcon from '@iconify-react/akar-icons/python-fill';

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
            "Designed responsive websites across multiple platforms with a 98% client satisfaction rate. Optimized UI and site layouts, increasing average user engagement by 35% for global clients.",
            "",
        ],
        stack: [
            { title: "Cursor AI", icon: CursorIcon },
            { title: "Python", icon: PythonFillIcon },
            { title: "Framer", icon: FramerSolidIcon },
            { title: "Adobe Suite", icon: AdobeSolidIcon },
            { title: "Netlify", icon: SiNetlify },
            { title: "Figma", icon: IoLogoFigma },
            { title: "Vercel", icon: RiVercelFill },
        ],
    },
];

export default experiences;