import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="get-started">
      <h1>Welcome to Plant Disease Detection</h1>
      <p>Analyze and prevent plant diseases effectively with AI-powered tools.</p>
      <button onClick={() => window.location.href = "/detect"}>Get Started</button>
    </div>
  );
}

export default GetStarted;