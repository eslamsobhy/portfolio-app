import React, { useState } from "react";

// icons
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// data
import { timelineData } from "../../constants/constants";

// styling
import "./about.css";

const About = () => {
  const [index, setIndex] = useState(0);
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
        </div>
        <div className="timeline-center">
          {timelineData.map((timeline, timelineIndex) => {
            // adding the classes accordingly
            let position = "nextSlide";
            if (timelineIndex === index) {
              position = "activeSlide";
            }
            if (timelineIndex === index - 1) {
              position = "lastSlide";
            }

            return (
              <div className={`timeline ${position}`} key={timelineIndex}>
                <div className="timeline-year">{timeline.year}</div>
                <div className="timeline-text">{timeline.text}</div>
              </div>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
