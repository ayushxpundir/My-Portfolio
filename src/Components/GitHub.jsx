import { useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar"; // Fixed to named import for v5 compatibility
import {  FaGithub } from "react-icons/fa";


function GitHub() {
    // 1. Local state to capture hover data and bounding coordinates
    const [tooltip, setTooltip] = useState(null);
    const containerRef = useRef(null);

    const customGreenTheme = {
        dark: [
            '#111113',
            '#004d35',
            '#007d57',
            '#2ee6a8',
            '#00dd99'
        ],
    };

    const reverseContributions = (contributions) => {
        return [...contributions].reverse();
    };

    // Helper function to turn "2026-06-20" into "20 June"
    const formatTooltipDate = (dateString) => {
        if (!dateString) return "";
        // Appending 'T00:00:00' avoids timezone shifting errors across different regions
        const date = new Date(`${dateString}T00:00:00`);
        return new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long"
        }).format(date);
    };

    return (
        // Relative anchor positioned safely outside the overflow clipping masks
        <section style={{ position: "relative" }} ref={containerRef}>
            <div className="about">
                <div 
                    className="contact-info github-chart-wrapper" 
                    style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        color: 'var(--text-primary)',
                        overflowX: 'auto', // Keeps chart responsive on micro layouts
                        backgroundColor: '#0a0909',
                        padding: '1.2em',
                        borderRadius: '1em',
                    }}
                >
                    {/* Clickable Profile Header as seen in image_050caa.png */}
                    <a 
                        href="https://github.com/ayushxpundir" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-profile-link"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                            color: '#2ee6a8', // Matching your theme accent color
                            fontWeight: '600',
                            fontSize: '15px',
                            marginBottom: '14px',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        {/* Inline GitHub Octocat SVG icon */}
                        <FaGithub 
                            width="20" 
                            style={{ fill: '#2ee6a8' }}
                        >
                        </FaGithub>
                        <span>@ayushxpundir</span>
                    </a>

                    <div className="github-chart-scroll">
                        <GitHubCalendar 
                            username="ayushxpundir" 
                            colorScheme="dark"
                            theme={customGreenTheme}
                            blockSize={12}
                            blockMargin={4}
                            transformData={reverseContributions}
                            showMonthLabels={false} 
                            labels={{
                                totalCount: '{{count}} contributions',
                            }}
                        />
                    </div>
                </div>
            </div>
            
            <style>{`
                .github-profile-link:hover {
                    color: #2ee6a8 !important;
                    text-decoration: underline !important;
                }

                .react-activity-calendar__footer, .github-profile-link span, .github-profile-link svg  {
                    font-size: clamp(.8em, 1.8vw, 1.2em);
                }
            `}</style>

        </section >
    );
}

export default GitHub;