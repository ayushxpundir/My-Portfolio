import { useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";

function GitHub() {
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

    return (
        <section style={{ position: "relative" }} ref={containerRef}>
            <div className="about">
                <div
                    className="contact-info github-chart-wrapper"
                    style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        color: 'var(--text-primary)',
                        overflowX: 'auto',
                    }}
                >
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
                            fontWeight: '600',
                            color: 'rgb(238, 238, 238)',
                            marginBottom: '8px',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        {/* Changed width to size={18} to match the typography scale accurately */}
                        <FaGithub
                            size={18}
                            style={{
                                fill: 'rgb(238, 238, 238)',
                                display: 'block'
                            }}
                        />
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
                            year="last"
                            labels={{
                                totalCount: '{{count}} contributions in last year',
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
    /* Switched em to rem to bypass component nesting constraints */
    .github-profile-link span, 
    .react-activity-calendar__footer,
    .react-activity-calendar__count, 
    .react-activity-calendar__legend-colors span {
        font-size: clamp(0.65rem, 1.5vw, 1rem) !important;
    }

    .react-activity-calendar__footer,
    .react-activity-calendar__count, 
    .react-activity-calendar__legend-colors span {
        color: rgb(238, 238, 238);
    }

    .github-profile-link:hover {
        text-decoration: underline;
    }

    svg {
        display: block;
    }
`}</style>
        </section >
    );
}

export default GitHub;