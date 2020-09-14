import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div className="container1">
        <h2 className="container5">Hatchlink</h2>
        <p>Your questons answered about Hatchlink</p>
      </div>
      <div className="container2">
        <h3>About</h3>
        <p>Sample text about Hatchlink</p>
      </div>
      <div className="container3">
        <h3>FAQ</h3>
        <p>Your questons answered about Hatchlink</p>
      </div>
      <div className="container4">
        <h3>Contact</h3>
        <p>Sample text about Hatchlink</p>
      </div>
    </div>
  );
}
