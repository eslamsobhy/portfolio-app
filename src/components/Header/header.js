import React from "react";
import "./header.css";

// icons
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

const Header = () => {
  return (
    <div className="navbar">
      <nav className="container section">
        <div className="nav-logo">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </div>
        <div className="nav-links">
          <div className="nav-link">Projects</div>
          <div className="nav-link">Technologies</div>
          <div className="nav-link">About</div>
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <AiFillGithub size="2rem" />
          </div>
          <div className="nav-icon">
            <AiFillLinkedin size="2rem" />
          </div>
          <div className="nav-icon">
            <AiFillInstagram size="2rem" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
