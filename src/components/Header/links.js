import React from "react";
import { links, social } from "../../data";

export const Links = () => {
  return (
    <section className="toggled-nav">
      <div className="links-container">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <div key={id} className="link">
              {text}
            </div>
          );
        })}
      </div>
      <div className="icons-container">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <div key={id} className="icon">
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
