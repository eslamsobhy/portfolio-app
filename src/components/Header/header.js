import React, { useEffect, useState } from "react";
import "./header.css";

// links and icons
import { links, social } from "../../data";

// components
import { Links } from "./links";

// icons
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLinks(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showLinks]);

  return (
    <div className="navbar">
      <nav className="container section">
        <div className="nav-center">
          <a
            style={{ display: "flex", alignItems: "center", color: "white" }}
            className="nav-logo"
          >
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
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
      {showLinks && <Links />}
    </div>
  );
};

export default Header;
