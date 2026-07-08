import { useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import useTheme from "../useTheme";

function GitHub() {
    const containerRef = useRef(null);
    const [theme] = useTheme();

    const customGreenTheme = {
        dark: [
            '#0a0a0a00',
            '#004d35',
            '#007d57',
            '#2ee6a8',
            '#00dd99'
        ],
        light: [
            '#eff4f1',
            '#d8efe4',
            '#9dddbf',
            '#58c996',
            '#00a86b'
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
                            marginBottom: '8px',
                            transition: 'color 0.2s ease'
                        }}
                    >
                        <FaGithub size={18} style={{ display: 'block' }} />
                        <span>@ayushxpundir</span>
                    </a>

                    <div className="github-chart-scroll">
                        <GitHubCalendar
                            username="ayushxpundir"
                            colorScheme={theme}
                            theme={customGreenTheme}
                            blockSize={12}
                            blockMargin={4}
                            transformData={reverseContributions}
                            showMonthLabels={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GitHub;