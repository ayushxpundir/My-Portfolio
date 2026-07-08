import CopilotFillIcon from "@iconify-react/mingcute/copilot-fill";
import MicrosoftIconIcon from '@iconify-react/logos/microsoft-icon';
import ClaudeIcon from '@iconify-react/selfhst/claude';
import AnthropicFillIcon from '@iconify-react/ri/anthropic-fill';



const certifications = [
    {
        id: 1,
        title: "Claude 101",
        company: "Antrophic",
        companyClass: "exp-span",
        link: "https://verify.skilljar.com/c/oxnn52yi2k3o",
        issued: "Show credentials",
        stack: [
            { title: "Anthropic", icon: AnthropicFillIcon, color:"#CC785C" },
            // { title: "Claude", icon: ClaudeIcon },
        ],
    },
    {
        id: 2,
        title: "Generative AI",
        company: "Microsoft",
        companyClass: "exp-span",
        link: "https://learn.microsoft.com/en-us/users/ayushpundir-9738/achievements/7de58n7z?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        issued: "Show credentials",
        stack: [
            { title: "Microsoft", icon: MicrosoftIconIcon },
            // { title: "Copilot", icon: CopilotFillIcon },
        ],
    },
];

export default certifications;