import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="section-container home-container">
        <div className="hero-title section-title">
          Hi there! <br />
          Welcome To Sobhii's
        </div>
        <article className="hero-text">
          "An evolving system increases it's complexity, unless work is done to
          reduce it." - Manny Lehman.
        </article>
        <button className="main-btn home-btn">
          <a href="https://www.google.com" target="_blank">
            Download Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
