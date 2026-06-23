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
import { SiGnubash } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";





function Stack() {

    document.querySelectorAll('.icon-box').forEach(box => {
        // Hide when clicked
        box.addEventListener('click', () => {
            box.setAttribute('data-clicked', 'true');
        });

        // Reset when the mouse moves away naturally
        box.addEventListener('mouseleave', () => {
            box.removeAttribute('data-clicked');
        });
    });

    // Force reset when leaving the page OR coming back
    const resetTooltips = () => {
        document.querySelectorAll('.icon-box').forEach(box => {
            box.removeAttribute('data-clicked');
        });
    };

    window.addEventListener('pageshow', resetTooltips);
    window.addEventListener('pagehide', resetTooltips);

    return (
        <>
            <section>
                <div className="stack">
                    <div className="s-head">
                        <h1>TECH STACK</h1>
                    </div>
                    <div className="stack-i">
                        <div className="icon-box" data-title="CSS">
                            <BsCss className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="JavaScript">
                            <BsJavascript className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="TypeScript">
                            <BsTypescript className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Tailwind CSS">
                            <RiTailwindCssFill className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="React">
                            <FaReact className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Next">
                            <SiNextdotjs className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Python">
                            <FaPython className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="MongoDB">
                            <SiMongodb className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Express">
                            <SiExpress className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Git">
                            <FaGitAlt className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="GitHub">
                            <FaGithub className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Node">
                            <FaNodeJs className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="PostgreSQL">
                            <SiPostgresql className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="MySQL">
                            <GrMysql className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="npm">
                            <SiNpm className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Bash">
                            <SiGnubash className="stack-icon" />
                        </div>
                        {/* Custom Cursor AI Icon Container */}
                        <div className="icon-box" data-title="Cursor AI">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stack-icon" fill="currentColor" viewBox="1.5 2 21 21">
                                <path d="m20.42,6.73L12.42,2.11c-.26-.15-.57-.15-.83,0L3.58,6.73c-.22.12-.35.36-.35.61v9.32c0,.25.13.48.35.61l8.01,4.62c.26.15.57.15.83,0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61h0Zm-.5.98h0s-7.73,13.39-7.73,13.39c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43l-7.59-4.38c-.09-.05-.05-.19.05-.19h15.46c.22,0,.36.24.25.43Z" />
                            </svg>
                        </div>
                        <div className="icon-box" data-title="Framer">
                            <PiFramerLogoFill className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="VS Code">
                            <VscVscode className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Adobe Suite">
                            <BiLogoAdobe className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Figma">
                            <IoLogoFigma className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Vercel">
                            <RiVercelFill className="stack-icon" />
                        </div>
                        <div className="icon-box" data-title="Netlify">
                            <SiNetlify className="stack-icon" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Stack;