import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Plant Disease Detection</h1>
      
      <div className="about-container">
        {/* About Section */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our application helps farmers and researchers detect plant diseases using AI-powered tools.
            Upload an image of your plant, and our system will analyze it to provide accurate results.
          </p>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We aim to revolutionize agriculture by providing accessible and accurate tools for plant disease detection,
            ensuring better yields and healthier plants.
          </p>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-list">
            <div className="feature">
              <h3>AI-Powered Detection</h3>
              <p>Analyze plant images with advanced AI algorithms for accurate results.</p>
            </div>
            <div className="feature">
              <h3>Real-Time Analysis</h3>
              <p>Get instant feedback on plant health and potential diseases.</p>
            </div>
            <div className="feature">
              <h3>Easy to Use</h3>
              <p>Simple and intuitive interface for farmers and researchers alike.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={require("./assets/member1.jpg")} alt="Pranjali Patil" />
              <h3>Pranjali Patil</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={require("./assets/member2.jpg")} alt="Vaishnavi Borse" />
              <h3>Vaishnavi Borse</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={require("./assets/member4.jpg")} alt="Yuvraj Rajure" />
              <h3>Yuvraj Rajure</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={require("./assets/member5.jpg")} alt="Hardik Sonawane" />
              <h3>Hardik Sonawane</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={require("./assets/member6.jpg")} alt="Maithili Pawar" />
              <h3>Maithili Pawar</h3>
              <p>Developer</p>
            </div>
            <div className="team-member">
              <img src={require("./assets/member3.jpg")} alt="Pratiksha Sonawane" />
              <h3>Pratiksha Sonawane</h3>
              <p>Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;