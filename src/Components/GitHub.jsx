import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar"; 

function GitHub() {
    const customGreenTheme = {
        dark: [
            '#111113', 
            '#004d35', 
            '#007d57', 
            '#2ee6a8', 
            '#00dd99'  
        ],
    };

    return (
        <section>
            <div className="about">
                <div 
                    className="contact-info github-chart-wrapper" 
                    style={{
                        maxWidth: '850px',
                        margin: '0 auto',
                        color: 'var(--text-primary)',
                        overflowX: 'auto' // Prevents layout break if screen gets tiny
                    }}
                >
                    <div className="github-chart-scroll">
                        <GitHubCalendar 
                            username="ayushxpundir" 
                            colorScheme="dark"
                            theme={customGreenTheme}
                            // Adjust square dimensions slightly for cleaner scaling
                            blockSize={12}
                            blockMargin={4}
                            labels={{
                                totalCount: '{{count}} contributions in the last year',
                            }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Global Scoped CSS with tuned compact fluid typography */}
            <style>{`
                .react-activity-calendar__footer {
                    font-size: clamp(.7em, 1.8vw, 1em);
                }
            `}</style>
        </section>
    );
}

export default GitHub;