import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/weather.png";
import "./style.css"

function Project() {
  return (
    <div className="card">
      <img
        src={image}
        alt="white gears with a blue backgorund titled Web development Projects"
        className="card-img-top"
      />
      <div className="card-body ">
        <h5 className="card-title">Weather Dashboard</h5>
        <p className="card-text">
          provides current weather details and 5 days forecast for a specific
          city
        </p>
        <div className=" card-text ">
          <p>Technlogies:</p>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>UIKit (CSS frame work)</li>
            <li>Open Weather Map API</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            to={{ pathname: "https://laithalwani.github.io/weather-dashboard" }}
            className="btn btn-sm"
            target="_blank"
          >
            APPLICATION
          </Link>
          <Link
            to={{
              pathname: "https://github.com/LaithAlwani/weather-dashboard",
            }}
            className="btn btn-sm"
            target="_blank"
          >
            REPOSITORY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
