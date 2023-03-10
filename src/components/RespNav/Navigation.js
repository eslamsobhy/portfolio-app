import React, { useState } from "react";
import { Link } from "react-router-dom";

// contact icons component
import ContactIcons from "./ContactIcons";

// Data
import { links } from "../../data";

// Styles
import "./navigation.css";

const Navigation = ({ setIsResNavOpen }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="resp-nav-container">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <div className="link" key={id}>
              <Link to={url} onClick={() => setIsResNavOpen(false)}>
                {text}
              </Link>
            </div>
          );
        })}
        <div className="icons-container">
          <span
            className="link"
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            Contact
          </span>{" "}
          {isContactOpen && <ContactIcons />}
        </div>
      </div>
    </>
  );
};

export default Navigation;
