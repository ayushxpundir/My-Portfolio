import { useLayoutEffect } from "react";
import experiences from "../Data/experienceData";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { ExperienceItem } from "./Experience.jsx";

function AllExperience() {
    // FIX: useLayoutEffect runs BEFORE the browser paints your content to the screen
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <div className="top-back">
                <Link to="/" className="See-more all-more">
                    <div className="box-see-more">
                        <FaArrowLeft className="arrow-left" />
                        <h1>Back to home</h1>
                    </div>
                </Link>
            </div>
            <div className="experience">
                <div className="s-head">
                    <h1>ALL EXPERIENCES</h1>
                </div>
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