import React from "react";
import { Link } from "react-router-dom";

// Data
import { links, social } from "../../data";

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
        <div className="link">Contact</div>
      </div>
    </>
  );
};

export default Navigation;
