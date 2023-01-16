import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="section-container">
        <div className="hero-title">
          Hi there! <br />
          Welcome To Sobhii's
        </div>
        <article className="hero-text">
          "An evolving system increases it's complexity, unless work is done to
          reduce it." - Manny Lehman.
        </article>
        <button className="hero-btn">Projects</button>
      </div>
    </section>
  );
};

export default Home;
