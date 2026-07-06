import {  FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import SendEmailIcon from '@iconify-react/streamline-pixel/send-email';

function Links() {
    return (
        <>
            <div className="top-inside-links">
                <a href="https://www.linkedin.com/in/ayushxpundir/" target="_blank" ><span className="icon-box" data-title="LinkedIn"><BsLinkedin className="top-links-style stack-icon" /></span></a>
                <a href="https://github.com/ayushxpundir" target="_blank" ><span className="icon-box" data-title="GitHub"><FaGithub className="top-links-style stack-icon" /></span></a>
                <a href="https://x.com/ayushxpundir" target="_blank" ><span className="icon-box" data-title="X/Twitter"><BsTwitterX className="top-links-style stack-icon" /></span></a>
                {/* <a href="https://www.instagram.com/ayushxpundir" target="_blank" ><span className="icon-box" data-title="Instagram"><BsInstagram   className="top-links-style stack-icon" /></span></a> */}
                <a href="https://leetcode.com/u/ayushxpundir/" target="_blank" ><span className="icon-box" data-title="LeetCode"><SiLeetcode  className="top-links-style stack-icon" /></span></a>
                <a href="mailto:ayushpundir0510@gmail.com" target="_blank" ><span className="icon-box" data-title="Email"><SendEmailIcon     className="top-links-style stack-icon" /></span></a>
                {/* <span className="icon-box" data-title="Hugging Face"><a href="https://huggingface.co/ayushxpundir" target="_blank" ><Icon icon="simple-icons:huggingface" className="top-links-style stack-icon" /></a></span> */}
            </div>
        </>
    )
}

export default Links
