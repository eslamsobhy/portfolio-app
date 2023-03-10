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

  const closeNav = () => {
    setIsResNavOpen(false);
    document.body.style.overflow = "visible";
    document.body.style.height = "auto";
  };

  return (
    <>
      <div className="con">
        <div className="resp-nav-container">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <div className="link" key={id}>
                <Link to={url} onClick={closeNav}>
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
      </div>
    </>
  );
};

export default Navigation;
