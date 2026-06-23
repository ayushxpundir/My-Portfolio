import ProjectCard from "./ProjectCard"
import { FaArrowRight } from "react-icons/fa6";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiZedindustries, SiFramer } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { BsCss } from "react-icons/bs";



function Projects() {

    return (
        <>
            <section>
                <div className="Projects">
                    <div className="s-head">
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="projects-info">
                        {/* 1st Project */}
                        <ProjectCard
                            head="Roxo"
                            image="./src/assets/roxo.webp"
                            url_live="https://roxo-ascii-player.vercel.app/"
                            url_github="https://github.com/ayushxpundir/ROXO"
                            description="A high-performance, browser-based digital scanning application that translates live video feeds into structural ASCII character arrays in real-time."
                            technologies={[
                                { icon: <BsJavascript />, name: "JavaScript" },
                                { icon: <BsCss />, name: "CSS" }
                            ]}
                        />
                        {/* 2nd Project */}
                        <ProjectCard
                            head="Pera"
                            image="./src/assets/pera.webp"
                            url_live="https://pera-bookmark-manager.vercel.app/"
                            url_github="https://github.com/ayushxpundir/Pera"
                            description="A clean, fast, and personal bookmark manager to organize everything you save on the web. No accounts, no clutter, no distractions."
                            technologies={[
                                { icon: <BsJavascript />, name: "JavaScript" },
                                { icon: <BsCss />, name: "CSS" }
                            ]}
                        />
                    </div>
                    <div className="See-more">
                        <div className="box-see-more">
                            <h1>
                                Show all projects
                            </h1>
                            <FaArrowRight className="arrow-right" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects