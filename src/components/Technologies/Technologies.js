import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./technologies.css";

// Icons
import { MdLanguage } from "react-icons/md";
import { FaLanguage, FaToolbox, FaTools } from "react-icons/fa";
import {
  SiCplusplus,
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiLaravel,
  SiJquery,
  SiBootstrap,
  SiRedux,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="section-container">
        <div className="section-title">Technologies</div>
        <p className="tech-text">
          I've worked with arange of technologies in the web development world.
          From Back End to Design. I’m always aiming to write code using the
          latest best practices in software development and suitable design
          patterns based on logic.
        </p>
      </div>
      <div className="technologies-container">
        <article className="technology">
          <MdLanguage />
          <div className="tech-heading">Languages</div>
          <div className="icons-container">
            <SiJavascript title="Javascript" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiTypescript title="Typescript" />
            <SiCplusplus title="C++" />
            <SiPhp title="PHP" />
          </div>
        </article>
        <article className="technology">
          <FaToolbox />
          <div className="tech-heading">Technologies</div>
          <div className="icons-container">
            <SiReact title="ReactJs" />
            <SiBootstrap title="Bootstrap" />
            <SiJquery title="JQuery" />
            <SiLaravel title="Laravel" />
          </div>
        </article>
        <article className="technology">
          <FaTools />
          <div className="tech-heading">Tools</div>
          <div className="icons-container">
            <SiRedux title="Redux Toolkit" />
            <SiMysql title="MySQL" />
            <SiGit title="Git" />
            <SiGithub title="GitHub" />
          </div>
        </article>
      </div>
      <div className="sec-btn">
        <button className="main-btn">
          <Link to="/">Back To home</Link>
        </button>
      </div>
    </section>
  );
};

export default Technologies;
