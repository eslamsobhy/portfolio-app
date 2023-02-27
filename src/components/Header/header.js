import React, { useEffect, useState } from "react";
import "./header.css";
import "./queries.css";
import { Link } from "react-router-dom";

// links and icons
import { links, social } from "../../data";

// icons
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Header = ({ isResNavOpen, setIsResNavOpen }) => {
  const hideNavIcon = () => {
    setIsResNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", hideNavIcon);
    return () => window.removeEventListener("resize", hideNavIcon);
  }, [window.innerWidth]);

  return (
    <div className="navbar">
      <nav className="container section">
        <div className="nav-center">
          <a
            style={{ display: "flex", alignItems: "center", color: "white" }}
            className="nav-logo"
          >
            <Link>
              <DiCssdeck size="3rem" />
            </Link>{" "}
            <span>Portfolio</span>
          </a>
        </div>
        <div className="nav-links">
          {links.map((link) => {
            return (
              <div className="nav-link" key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </div>
            );
          })}
        </div>
        <div className="nav-icons">
          {social.map((icon) => {
            return (
              <div className="nav-icon" key={icon.id}>
                <a href={icon.url} target="_blank">
                  {icon.icon}
                </a>
              </div>
            );
          })}
        </div>
        <button
          className="nav-toggle"
          onClick={() => setIsResNavOpen(!isResNavOpen)}
        >
          <FaBars />
        </button>
      </nav>
      {/* {showLinks && <Links />} */}
    </div>
  );
};

export default Header;
