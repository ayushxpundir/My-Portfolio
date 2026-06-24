import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import certifications from "../Data/Certificationsdata.jsx";
import { CertificationItem } from "./Certifications.jsx";

function AllCertifications() {
    return (
        <section>
            <div className="experience">
                <div className="s-head">
                    <h1>ALL CERTIFICATIONS</h1>
                </div>
                <Link to="/" className="See-more">
                    <div className="box-see-more">
                        <FaArrowLeft className="arrow-right" />
                        <h1>Back to home</h1>
                    </div>
                </Link>
                <div className="exp-work">
                    <div className="timeline-container">
                        {certifications.map((cert) => (
                            <CertificationItem cert={cert} key={cert.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AllCertifications;