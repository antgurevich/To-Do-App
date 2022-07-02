import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./functionBased/components/TodoContainer"; // Component file
import "./functionBased/App.css"; // Style sheet
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Router file
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
