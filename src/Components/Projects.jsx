import React from "react";
import { LuGlobe } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import projectsData from "../Data/projectsData.jsx";

function ProjectCard({ image, url_live, url_github, head, description, technologies = [] }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={head} className="project-img" />
      </div>
      <div className="pro-det">
        <h3 className="project-head">{head}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <div className="pro-links">
            <a href={url_live} target="_blank" rel="noreferrer" className="project-btn icon-box" data-title="Visit Website">
              <LuGlobe className="pro-down-ico" />
            </a>
            <a href={url_github} target="_blank" rel="noreferrer" className="project-btn icon-box" data-title="View on GitHub">
              <FiGithub className="pro-down-ico" />
            </a>
          </div>
          <div className="tech-icons" style={{ display: "flex", gap: ".5em" }}>
            {technologies.map((tech, index) => (
              <span key={index} className="icon-box" data-title={tech.name}>
                {React.cloneElement(tech.icon, { className: "tech-istyle" })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
    return (
        <section>
            <div className="Projects">
                <div className="s-head"><h1>PROJECTS</h1></div>
                <div className="projects-info">
                    {projectsData.slice(0, 2).map((project) => (
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
                <Link
                    to="/projects"
                    className="See-more"
                    onClick={() => sessionStorage.setItem("homeScrollY", window.scrollY)}
                >
                    <div className="box-see-more">
                        <h1>Show all projects</h1>
                        <FaArrowRight className="arrow-right" />
                    </div>
                </Link>
            </div>
        </section>
    );
}

export { ProjectCard };
export default Projects;