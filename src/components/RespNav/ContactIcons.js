import React from "react";
import { Link } from "react-router-dom";

// styles
import "./navigation.css";

// data
import { social } from "../../data";

const ContactIcons = () => {
  return (
    <>
      <div className="contact-container">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <div className="icon-element" key={id}>
              <Link to={url}>{icon}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactIcons;
