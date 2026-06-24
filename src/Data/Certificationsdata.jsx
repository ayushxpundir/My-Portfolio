import { BsClaude } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";

const certifications = [
    {
        id: 1,
        title: "Claude 101",
        company: "Antrophic",
        companyClass: "exp-span",
        link: "https://verify.skilljar.com/c/oxnn52yi2k3o",
        issued: "Issued Jun 26",
        description: [
            "I learned about leveraging Claude's core strengths, like analyzing complex data and adapting its communication style to match mine.",
        ],
        stack: [
            { title: "Claude", icon: BsClaude },
            { title: "Communication", icon: IoChatbubblesOutline },
        ],
    },
    {
        id: 2,
        title: "Explore Generative AI",
        company: "Microsoft",
        companyClass: "exp-span",
        link: "https://learn.microsoft.com/en-us/users/ayushpundir-9738/achievements/7de58n7z?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        issued: "Issued Jun 26",
        description: [
            "I learned about the fundamentals of generative AI and how tools like Microsoft Copilot are transforming content creation, text-to-image visualization, and productivity.",
        ],
        stack: [
            { title: "Microsoft", icon: FaMicrosoft },
            { title: "GitHub Copilot", icon: GoCopilot },
        ],
    },
];

export default certifications;