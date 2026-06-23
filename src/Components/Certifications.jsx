import { BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiZedindustries, SiFramer, SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { BsCss } from "react-icons/bs";
import { PiFramerLogoFill } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import { BiLogoAdobe } from "react-icons/bi";
import Projects from "./Projects";
import { BsClaude } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { FaMicrosoft } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";




function Certifications() {

    return (
        <>
            <section>
                <div className="experience">
                    <div className="s-head">
                        <h1>CERTIFICATIONS</h1>
                    </div>
                    <div className="exp-work">
                        <div className="timeline-container">
                            {/* Experience #1 */}
                            <div className="timeline-row">
                                <div className="timeline-axis">
                                    <div className="dot"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="timeline-content">
                                    <div className="exp-title">
                                        <h3>Claude 101 · <span className="exp-span">Antrophic </span> </h3>
                                    </div>
                                    <a href="https://verify.skilljar.com/c/oxnn52yi2k3o" target="_blank"><p className="subtitle">Issued Jun 26 <LuExternalLink className="certext" /></p></a>
                                    <div className="exp-description">
                                        <ol>
                                            <li>
                                                I learned about leveraging Claude's core strengths, like analyzing complex data and adapting its communication style to match mine.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="exp-stack">
                                        <div className="icon-box" data-title="Claude">
                                            <BsClaude className="exp-sicons" />
                                        </div>
                                        <div className="icon-box" data-title="Communication ">
                                            <IoChatbubblesOutline className="exp-sicons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Certi 2 */}
                            <div className="timeline-row">
                                <div className="timeline-axis">
                                    <div className="dot"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="timeline-content">
                                    <div className="exp-title">
                                        <h3>Explore Generative AI · <span className="exp-span">Microsoft </span> </h3>
                                    </div>
                                    <a href="https://learn.microsoft.com/en-us/users/ayushpundir-9738/achievements/7de58n7z?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank"><p className="subtitle">Issued Jun 26 <LuExternalLink className="certext" /></p></a>
                                    <div className="exp-description">
                                        <ol>
                                            <li>
                                                I learned about the fundamentals of generative AI and how tools like Microsoft Copilot are transforming content creation, text-to-image visualization, and productivity.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="exp-stack">
                                        <div className="icon-box" data-title="Microsoft">
                                            <FaMicrosoft  className="exp-sicons" />
                                        </div>
                                        <div className="icon-box" data-title="GitHub Copilot  ">
                                            <GoCopilot  className="exp-sicons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="See-more">
                        <div className="box-see-more">
                            <h1>
                                Show all certifications
                            </h1>
                            <FaArrowRight className="arrow-right" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certifications;