import React from "react";
import "./header.css";

// links and icons
import { links, social } from "../../data";

// icons
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
          {links.map((link) => {
            return (
              <div className="nav-link" key={link.id}>
                {link.text}
              </div>
            );
          })}
        </div>
        <div className="nav-icons">
          {social.map((icon) => {
            return (
              <div className="nav-icon" key={icon.id}>
                {icon.icon}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
