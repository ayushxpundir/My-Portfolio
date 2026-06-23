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

import { FaArrowRight } from "react-icons/fa6";


function Experience() {

    return (
        <>
            <section>
                <div className="experience">
                    <div className="s-head">
                        <h1>EXPERIENCE</h1>
                    </div>
                    <div className="exp-work">
                        <div className="timeline-container">
                            {/* Experience latest */}
                            <div className="exp-cont">
                                {/* Experience #1 Latest */}
                                <div className="timeline-row">
                                    <div className="timeline-axis">
                                        <div className="dot active"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="exp-title">
                                            <h3>Frontend Developer · <span className="exp-span es1">Classified</span> </h3>
                                        </div>
                                        <p className="subtitle">Stealth, Full-Time | Feb 26 - Present</p>
                                        {/* <div className="exp-description">
                                            <ol>
                                            </ol>
                                        </div> */}
                                        {/* <div className="exp-stack"> */}
                                        {/* Add icons like this */}
                                        {/* <div className="icon-box" data-title="Figma">
                                                <IoLogoFigma className="exp-sicons" />
                                            </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* Experience #2 */}
                            <div className="timeline-row">
                                <div className="timeline-axis">
                                    <div className="dot"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="timeline-content">
                                    <div className="exp-title">
                                        <h3>UI & Graphic Designer · <span className="exp-span">Freelancer</span> </h3>
                                    </div>
                                    <p className="subtitle">Remote, Part-Time | Jul 24 - Feb 26</p>
                                    <div className="exp-description">
                                        <ol>
                                            <li>
                                                Designed responsive websites across multiple platforms with a 98% client satisfaction rate.
                                            </li>
                                            <li>
                                                Optimized UI and site layouts, increasing average user engagement by 35% for global clients.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="exp-stack">
                                        <div className="icon-box" data-title="Figma">
                                            <IoLogoFigma className="exp-sicons" />
                                        </div>
                                        <div className="icon-box" data-title="Cursor AI">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="exp-sicons" fill="currentColor" viewBox="1.5 2 21 21">
                                                <path d="m20.42,6.73L12.42,2.11c-.26-.15-.57-.15-.83,0L3.58,6.73c-.22.12-.35.36-.35.61v9.32c0,.25.13.48.35.61l8.01,4.62c.26.15.57.15.83,0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61h0Zm-.5.98h0s-7.73,13.39-7.73,13.39c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43l-7.59-4.38c-.09-.05-.05-.19.05-.19h15.46c.22,0,.36.24.25.43Z" />
                                            </svg>
                                        </div>
                                        <div className="icon-box" data-title="Python">
                                            <FaPython className="exp-sicons" />
                                        </div>
                                        <div className="icon-box" data-title="Framer">
                                            <PiFramerLogoFill className="exp-sicons" />
                                        </div>
                                        <div className="icon-box" data-title="Adobe Suite">
                                            <BiLogoAdobe className="exp-sicons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="See-more">
                        <div className="box-see-more">
                            <h1>
                                Show all experiences
                            </h1>
                            <FaArrowRight className="arrow-right" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;