import { BsCss, BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiExpress, SiGnubash, SiNpm, SiNetlify, SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { PiFramerLogoFill } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";

// "cursor" is a special-cased key handled with a custom <svg> in Stack.jsx
const stackItems = [
    { title: "CSS", icon: BsCss },
    { title: "JavaScript", icon: BsJavascript },
    { title: "TypeScript", icon: BsTypescript },
    { title: "Tailwind CSS", icon: RiTailwindCssFill },
    { title: "React", icon: FaReact },
    { title: "Next", icon: SiNextdotjs },
    { title: "Python", icon: FaPython },
    { title: "MongoDB", icon: SiMongodb },
    { title: "Express", icon: SiExpress },
    { title: "Git", icon: FaGitAlt },
    { title: "GitHub", icon: FaGithub },
    { title: "Node", icon: FaNodeJs },
    { title: "PostgreSQL", icon: SiPostgresql },
    { title: "MySQL", icon: GrMysql },
    { title: "npm", icon: SiNpm },
    { title: "Bash", icon: SiGnubash },
    { title: "Cursor AI", icon: "cursor" },
    { title: "Framer", icon: PiFramerLogoFill },
    { title: "VS Code", icon: VscVscode },
    { title: "Adobe Suite", icon: BiLogoAdobe },
    { title: "Figma", icon: IoLogoFigma },
    { title: "Vercel", icon: RiVercelFill },
    { title: "Netlify", icon: SiNetlify },
];

export default stackItems;