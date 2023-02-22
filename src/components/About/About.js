import React from "react";

// data
import { timelineData } from "../../constants/constants";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="section-container">
          <div className="section-title">About</div>
          <p className="about-text">
            I've worked with arange of technologies in the web development
            world. From Back End to Design. I’m always aiming to write code
            using the latest best practices in software development and suitable
            design patterns based on logic.
          </p>
          <div className="timeline-center">
            {timelineData.map((timeline, index) => {
              return (
                <div className="timeline" key={index}>
                  <div className="timeline-year">{timeline.year}</div>
                  <div className="timeline-text">{timeline.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
