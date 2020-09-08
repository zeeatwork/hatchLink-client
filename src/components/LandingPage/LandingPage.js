import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <nav className="sticky">
        <h1>Just my Icon</h1>
      </nav>
      <div className="container">
        <h2>Hatchlink</h2>
        <p>Your questons answered about Hatchlink</p>
      </div>
      <div className="container grey">
        <h3>About</h3>
        <p>Sample text about Hatchlink</p>
      </div>
      <div className="container">
        <h3>FAQ</h3>
        <p>Your questons answered about Hatchlink</p>
      </div>
      <div className="container blue">
        <h3>Contact</h3>
        <p>Sample text about Hatchlink</p>
      </div>
    </div>
  );
}
