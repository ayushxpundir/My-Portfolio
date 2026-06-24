import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import projectsData from "../Data/projectsData.jsx";
import { ProjectCard } from "./Projects.jsx";

function AllProjects() {
    return (
        <section>
            <div className="Projects">
                <div className="top-back">
                    <Link to="/" className="See-more all-more">
                        <div className="box-see-more">
                            <FaArrowLeft className="arrow-right" />
                            <h1>Back to home</h1>
                        </div>
                    </Link>
                </div>
                <div className="s-head"><h1>ALL PROJECTS</h1></div>
                <div className="projects-info">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            head={project.head}
                            image={project.image}
                            url_live={project.url_live}
                            url_github={project.url_github}
                            description={project.description}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AllProjects;