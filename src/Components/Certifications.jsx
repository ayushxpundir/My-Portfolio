import { FaArrowRight } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import certifications from "../Data/Certificationsdata.jsx";

function CertificationItem({ cert }) {
    return (
        <div className="timeline-row">
            <div className="timeline-axis">
                <div className="dot"></div>
                <div className="line"></div>
            </div>
            <div className="timeline-content">
                <div className="exp-title">
                    <h3>{cert.title} · <span className={cert.companyClass}>{cert.company} </span> </h3>
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer">
                    <p className="subtitle">{cert.issued} <LuExternalLink className="certext" /></p>
                </a>
                <div className="exp-description">
                    <ol>
                        {cert.description.map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ol>
                </div>
                <div className="exp-stack">
                    {cert.stack.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div className="icon-box" data-title={item.title} key={i}>
                                <Icon className="exp-sicons" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function Certifications() {
    return (
        <>
            <section>
                <div className="experience">
                    <div className="s-head">
                        <h1>CERTIFICATIONS</h1>
                    </div>
                    <div className="exp-work">
                        <div className="timeline-container">
                            {certifications.slice(0, 2).map((cert) => (
                                <CertificationItem cert={cert} key={cert.id} />
                            ))}
                        </div>
                    </div>
                    <Link
                        to="/certifications"
                        className="See-more"
                        onClick={() => sessionStorage.setItem("homeScrollY", window.scrollY)}
                    >
                        <div className="box-see-more">
                            <h1>
                                Show all certifications
                            </h1>
                            <FaArrowRight className="arrow-right" />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export { CertificationItem };
export default Certifications;