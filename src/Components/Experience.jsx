import experiences from "../Data/experienceData";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ExperienceItem({ exp }) {
    return (
        <div className="exp-cont">
            <div className="timeline-row">
                <div className="timeline-axis">
                    <div className={`dot ${exp.active ? "active" : ""}`}></div>
                    <div className="line"></div>
                </div>
                <div className="timeline-content">
                    <div className="exp-title">
                        <h3>
                            {exp.title} · <span className={exp.companyClass}>{exp.company}</span>
                        </h3>
                    </div>
                    <p className="subtitle">{exp.subtitle}</p>

                    {exp.description.length > 0 && (
                        <div className="exp-description">
                            <ol>
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {exp.stack.length > 0 && (
                        <div className="exp-stack">
                            {exp.stack.map(({ title, icon: Icon }) => (
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

function Experience() {
    return (
        <section>
            <div className="experience">
                <div className="s-head">
                    <h1>EXPERIENCES</h1>
                </div>
                <div className="exp-work">
                    <div className="timeline-container">
                        {experiences.slice(0, 2).map((exp) => (
                            <ExperienceItem exp={exp} key={exp.id} />
                        ))}
                    </div>
                </div>

                <Link
                    to="/experience"
                    className="See-more"
                    onClick={() => sessionStorage.setItem("homeScrollY", window.scrollY)}
                >
                    <div className="box-see-more">
                        <h1>Show all experiences</h1>
                        <FaArrowRight className="arrow-right" />
                    </div>
                </Link>
            </div>
        </section>
    );
}

export { ExperienceItem };
export default Experience;