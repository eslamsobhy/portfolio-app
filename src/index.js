import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element="" />
        <Route path="/about" element="" />
        <Route path="/technologies" element="" />
        <Route path="/projects" element="" />
        <Route path="/project/:id" element="" />
        <Route path="*" element="" />
      </Routes>
    </Router>
  </React.StrictMode>
);
