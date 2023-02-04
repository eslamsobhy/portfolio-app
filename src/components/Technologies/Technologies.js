import React from "react";

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
          From Back End to Design.
        </p>
      </div>
      <div className="technologies-container">
        <article className="technology">
          <MdLanguage />
          <div className="tech-heading">Languages</div>
          <div className="icons-container">
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <SiTypescript />
            <SiCplusplus />
            <SiPhp />
          </div>
        </article>
        <article className="technology">
          <FaToolbox />
          <div className="tech-heading">Frameworks & Libraries</div>
          <div className="icons-container">
            <SiReact title="React-Js" />
            <SiBootstrap />
            <SiJquery />
            <SiLaravel />
          </div>
        </article>
        <article className="technology">
          <FaTools />
          <div className="tech-heading">Tools & technologies</div>
          <div className="icons-container">
            <SiRedux />
            <SiMysql />
            <SiGit />
            <SiGithub />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Technologies;
