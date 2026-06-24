import experiences from "../Data/experienceData";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { ExperienceItem } from "./Experience.jsx";

function AllExperience() {
    return (
        <section>
            <div className="experience">
                <div className="s-head">
                    <h1>ALL EXPERIENCES</h1>
                </div>
                <Link to="/" className="See-more">
                    <div className="box-see-more">
                        <FaArrowLeft className="arrow-right" />
                        <h1>Back to home</h1>
                    </div>
                </Link>
                <div className="exp-work">
                    <div className="timeline-container">
                        {experiences.map((exp) => (
                            <ExperienceItem exp={exp} key={exp.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AllExperience;