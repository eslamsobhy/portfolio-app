import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// components and pages
import App from "./App";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element="" />
        <Route path="*" element="" />
      </Routes>
    </Router>
  </React.StrictMode>
);
