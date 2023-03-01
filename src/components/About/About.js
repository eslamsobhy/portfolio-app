import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            I'm Eslam Sobhy, a software engineer skilled in web development with
            a Bachelor's degree focused on Computer Science from Ain Shams
            University. I'm really passionate about programming; the thing that
            made me willing to learn a new thing every single day without any
            boredom. <br />
            Currently I'm more focused on Front-End web development using
            ReactJs. Here are some of the highlights of my career;
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
                <div className="timeline-icon">{timeline.icon}</div>
                <div className="timeline-text">{timeline.text}</div>
              </div>
            );
          })}
          <button
            className="prev"
            onClick={() =>
              setIndex((index - 1 + timelineData.length) % timelineData.length)
            }
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => setIndex((index + 1) % timelineData.length)}
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="sec-btn">
          <button className="main-btn">
            <Link to="/">Back To home</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
