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
          "I believe that in order for you to get a great product, you have to
          focus on the process, not the product."
        </article>
        <button className="main-btn home-btn">
          <a
            href="https://drive.google.com/file/d/1HsgN5hKILl9bAtyIgkoiH5wEidoPdQUb/view?usp=sharing"
            target="_blank"
          >
            My Resumè
          </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
