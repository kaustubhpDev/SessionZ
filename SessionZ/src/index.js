import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Components/Navbar/Navbar";
import Switch from "react-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Sectiontop from "./Components/Sectiontop/Sectiontop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/pricing" element={<Sectiontop />} />
      <Route exact path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
