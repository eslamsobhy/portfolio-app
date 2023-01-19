import React from "react";

// styles
import "./projects.css";

// data
import { projects } from "../../constants/constants";

// icons
import { BsCodeSlash, BsGlobe } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="projects">
      <div className="section-container">
        <div className="section-title">Projects</div>
        <article className="projects-container">
          {projects.map((project) => {
            const { image, title, id, description, tags, visit, source } =
              project;
            return (
              <div className="project" key={id}>
                <img className="project-img" src={image} alt={title} />
                <div className="project-title">{title}</div>
                <hr className="project-hr" />
                <p className="project-description">{description}</p>
                <div className="stack">Stack</div>
                <div className="stack-tags">
                  {tags.map((tag, index) => {
                    return (
                      <div className="tag" key={index}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div className="links">
                  <a href={source}>
                    <BsCodeSlash />
                  </a>
                  <a href={visit}>
                    <BsGlobe />
                  </a>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Projects;
