import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="container1">
          <h3 className="container5">Why Use Hatchlink?</h3>
          <ul>
            <li>Find the resources you need to leave the tutorial nest.</li>
            <li>
              Rated tools that help you leave the nest and fly toward your own
              projects.
            </li>
          </ul>
        </div>
        <div className="container2">
          <h3>Who Uses HatchLink?</h3>
          <p>
            HatchLink is for new programmers with little to no experience or
            tech background. Tech newbies have an ever-increasing number of
            options to learn to code. However, the tech newbie is often confused
            by the large number of languages, frameworks, career paths and
            tutorials. Many newbies never “leave the nest”, or enter the tech
            community and start building.
          </p>
        </div>
      </div>
    );
  }
}
