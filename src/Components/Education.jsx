import educations from "../Data/educationData";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function EducationItem({ edu }) {
    return (
        <div className="exp-cont edu-cont"> {/* Added an extra class for safety */}
            <div className="timeline-row">
                <div className="timeline-axis">
                    <div className={`dot ${edu.active ? "active" : ""}`}></div>
                    <div className="line"></div>
                </div>
                <div className="timeline-content">
                    <div className="exp-title">
                        <h3>
                            {edu.title} · <span className={edu.companyClass}>{edu.company}</span>
                        </h3>
                    </div>
                    <p className="subtitle">{edu.subtitle}</p>

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

                {/* <Link
                    to="/education"
                    className="See-more"
                    onClick={() => sessionStorage.setItem("homeScrollY", window.scrollY)}
                >
                    <div className="box-see-more">
                        <h1>Show all education</h1>
                        <FaArrowRight className="arrow-right" />
                    </div>
                </Link> */}
            </div>
        </section>
    );
}

export { EducationItem };
export default Education;