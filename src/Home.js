import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Detect Plant Diseases with AI</h1>
          <p>Advanced technology for healthier crops and sustainable agriculture</p>
          <div className="cta-buttons">
            <Link to="/detect" className="primary-btn">Start Detection</Link>
            <Link to="/about" className="secondary-btn">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="features-overview">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Accurate Detection</h3>
          <p>Our AI model identifies plant diseases with high accuracy</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Instant Results</h3>
          <p>Get disease analysis in seconds, not days</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Detailed Analysis</h3>
          <p>Receive comprehensive reports with severity assessment</p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-content">
          <h2>Why Choose Our Technology?</h2>
          <p>Our plant disease detection system uses advanced machine learning to analyze leaf images and identify diseases early, helping farmers save crops and reduce pesticide use.</p>
          <Link to="/getstarted" className="text-link">Get Started →</Link>
        </div>
        <div className="info-image">
          {/* This div will have a background image via CSS */}
        </div>
      </div>
    </div>
  );
}

export default Home;