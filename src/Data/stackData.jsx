import { BsTypescript } from "react-icons/bs";
import { FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiGnubash, SiNpm, SiNetlify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import PostgresqlIcon from '@iconify-react/simple-icons/postgresql';
import FramerSolidIcon from '@iconify-react/teenyicons/framer-solid';
import ReactFillIcon from '@iconify-react/akar-icons/react-fill';
import NextjsIcon from '@iconify-react/devicon-plain/nextjs';
import VscodeIcon from '@iconify-react/codicon/vscode';
import CursorIcon from '@iconify-react/simple-icons/cursor';
import AdobeSolidIcon from '@iconify-react/streamline/adobe-solid';
import PythonFillIcon from '@iconify-react/akar-icons/python-fill';
import NodeFillIcon from '@iconify-react/akar-icons/node-fill';
import PhotoshopIcon from '@iconify-react/devicon-plain/photoshop';
import GitIcon from '@iconify-react/bi/git';
import GithubFillIcon from '@iconify-react/akar-icons/github-fill';


const stackCategories = [
    {
        category: "Frontend",
        items: [
            { title: "Framer", icon: FramerSolidIcon },
            { title: "TypeScript", icon: BsTypescript },
            { title: "React", icon: ReactFillIcon },
            { title: "Tailwind CSS", icon: RiTailwindCssFill },
            { title: "Next.js", icon: NextjsIcon },
        ]
    },
    {
        category: "Backend & Databases",
        items: [
            { title: "Python", icon: PythonFillIcon },
            { title: "Node.js", icon: NodeFillIcon },
            { title: "PostgreSQL", icon: PostgresqlIcon },
            { title: "MySQL", icon: GrMysql },
            { title: "MongoDB", icon: SiMongodb },
            { title: "Express.js", icon: SiExpress },
        ]
    },
    {
        category: "Tools & Ecosystem",
        items: [
            { title: "Git", icon: GitIcon },
            { title: "GitHub", icon: GithubFillIcon },
            { title: "npm", icon: SiNpm },
            { title: "Bash", icon: SiGnubash },
            { title: "VS Code", icon: VscodeIcon },
            { title: "Cursor AI", icon: CursorIcon },
        ]
    },
    {
        category: "Design & Deployment",
        items: [
            { title: "Photoshop", icon: PhotoshopIcon },
            { title: "Figma", icon: IoLogoFigma },
            { title: "Vercel", icon: RiVercelFill },
            { title: "Netlify", icon: SiNetlify },
        ]
    }
];

export default stackCategories;