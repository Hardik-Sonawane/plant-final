import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";
import DetectDisease from "./DetectDisease";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Determine if the navigation bar should be shown
  const showNavbar = location.pathname !== "/getstarted";

  return (
    <div className="app">
      {/* Conditionally render the navigation bar */}
      {showNavbar && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">PlantDisease</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/detect">Detect Disease</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<DetectDisease />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;