import { useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar"; // Fixed to named import for v5 compatibility

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
                        overflowX: 'auto' // Keeps chart responsive on micro layouts
                    }}
                >
                    <div className="github-chart-scroll">
                        <GitHubCalendar 
                            username="ayushxpundir" 
                            colorScheme="dark"
                            theme={customGreenTheme}
                            blockSize={12}
                            blockMargin={4}
                            transformData={reverseContributions}
                            // 2. Attach clean tracking event listeners to every single box natively
                            renderBlock={(block, activity) => {
                                const handleMouseEnter = (e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const parentRect = containerRef.current.getBoundingClientRect();
                                    
                                    setTooltip({
                                        count: activity.count,
                                        date: activity.date,
                                        // Position precisely above the element relative to parent anchor
                                        top: rect.top - parentRect.top - 40,
                                        left: rect.left - parentRect.left + (rect.width / 2)
                                    });
                                };

                                const handleMouseLeave = () => setTooltip(null);

                                return (
                                    <g
                                        className="interactive-block"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        onPointerDown={handleMouseEnter} // Ensures compatibility with touch layers
                                    >
                                        {block}
                                    </g>
                                );
                            }}
                            labels={{
                                totalCount: '{{count}} contributions',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* 3. GitHub dark theme popover matching requirement specs */}
            <div
                className={`gh-custom-tooltip ${tooltip ? "visible" : ""}`}
                style={{
                    position: "absolute",
                    top: tooltip ? `${tooltip.top}px` : "0px",
                    left: tooltip ? `${tooltip.left}px` : "0px",
                    transform: "translateX(-50%)",
                    backgroundColor: "#161B22",
                    color: "#ffffff",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                    fontWeight: "400",
                    pointerEvents: "none", // Avoid focus collisions
                    zIndex: 9999,
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 24px rgba(0,0,0,.4)",
                    opacity: tooltip ? 1 : 0,
                    visibility: tooltip ? "visible" : "hidden",
                    transition: "opacity 150ms ease-out, transform 150ms ease-out"
                }}
            >
                {tooltip && (
                    <>
                        <span>{tooltip.count === 0 ? "No" : tooltip.count} contributions on {tooltip.date}</span>
                        {/* Downward pointing arrow */}
                        <div style={{
                            position: "absolute",
                            bottom: "-4px",
                            left: "50%",
                            transform: "translateX(-50%) rotate(45deg)",
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#1a1a1c",
                            Color: "#rgb(238, 238, 238)"
                        }}/>
                    </>
                )}
            </div>
            
            <style>{`
                .react-activity-calendar__footer {
                    font-size: clamp(.95em, 1.8vw, 1em);
                }

                .interactive-block {
                    cursor: pointer;
                    outline: none;
                }

                /* 4. Only provide subtle brightness shift - no heavy scaling/transforms */
                .interactive-block rect {
                    transition: filter 100ms ease;
                }

                .interactive-block:hover rect {
                    filter: brightness(1.25) !important;
                }

                /* Micro-rise entry animation effect triggers */
                .gh-custom-tooltip {
                    transform: translateX(-50%) translateY(4px);
                }
                .gh-custom-tooltip.visible {
                    transform: translateX(-50%) translateY(0px) !important;
                }
            `}</style>
        </section>
    );
}

export default GitHub;