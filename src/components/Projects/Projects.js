import React from "react";
import { Link } from "react-router-dom";

// styles
import "./projects.css";

// data
import { projects } from "../../constants/constants";

// icons
import { BsGithub, BsGlobe } from "react-icons/bs";

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
                <hr className="project-hr" />
                <div className="stack">Tools & Technologies</div>
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
                  <a href={source} title="code" target="_blank">
                    <BsGithub />
                  </a>
                  <a href={visit} title="live demo" target="_blank">
                    <BsGlobe />
                  </a>
                </div>
              </div>
            );
          })}
        </article>
        <div className="sec-btn">
          <button className="main-btn">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
