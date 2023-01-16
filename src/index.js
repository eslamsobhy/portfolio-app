import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

// components and pages
import App from "./App";
import Home from "./components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element="" />
        <Route path="/technologies" element="" />
        <Route path="/projects" element="" />
        <Route path="/project/:id" element="" />
        <Route path="*" element="" />
      </Routes>
    </Router>
  </React.StrictMode>
);
