import educations from "../Data/educationData";

function LogoAside({ logo }) {
    if (!logo?.src) return null;

    return (
        <aside className="icon-box" data-title={logo.heading}>
            <img src={logo.src} alt={logo.alt || logo.heading} className="edu-logo-img" />
        </aside>
    );
}

function EducationItem({ edu }) {
    return (
        <div className="exp-cont edu-cont">
            <div className="timeline-row">

                <div className="timeline-content">
                    <div className="edu-side-l">
                        <LogoAside logo={edu.logo} />

                        <div>
                            <div className="exp-title">
                                <h3>
                                    {edu.title} · <span className={edu.companyClass}>{edu.company}</span>
                                </h3>
                            </div>
                            <p className="subtitle">{edu.subtitle}</p>

                        </div>
                    </div>
                    {edu.description.length > 0 && (
                        <div className="exp-description">
                            <ol>
                                {edu.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {edu.stack.length > 0 && (
                        <div className="exp-stack">
                            {edu.stack.map(({ title, icon: Icon }) => (
                                <div className="icon-box" data-title={title} key={title}>
                                    <Icon className="exp-sicons" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Education() {
    return (
        <section>
            <div className="experience education">
                <div className="s-head">
                    <h1>EDUCATION</h1>
                </div>
                <div className="exp-work">
                    <div className="timeline-container">
                        {educations.slice(0, 2).map((edu) => (
                            <EducationItem edu={edu} key={edu.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export { EducationItem };
export default Education;