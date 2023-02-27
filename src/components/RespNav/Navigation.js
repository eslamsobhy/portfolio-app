import React from "react";
import { Link } from "react-router-dom";

// contact icons component
import ContactIcons from "./ContactIcons";

// Data
import { links } from "../../data";

// Styles
import "./navigation.css";

const Navigation = ({ setIsNavOpen }) => {
  return (
    <>
      <div className="resp-nav-container">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <div className="link" key={id}>
              <Link to={url} onClick={() => setIsNavOpen(false)}>
                {text}
              </Link>
            </div>
          );
        })}
        <div className="icons-container">
          <span className="link">Contact</span> <ContactIcons />
        </div>
      </div>
    </>
  );
};

export default Navigation;
