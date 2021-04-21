import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../utils/ProjectContext";
import "./style.css";

function Project({ handleBtnClick }) {
  const {
    title,
    image,
    description,
    technologies,
    appLink,
    repoLink,
  } = useContext(ProjectContext);
  return (
    <>
      <div className="card">
        <img src={image} alt="Alt Description" className="card-img-top" />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className=" card-text ">
            <p>Technlogies:</p>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              to={{ pathname: appLink }}
              className="btn btn-sm"
              target="_blank"
            >
              APPLICATION
            </Link>
            <Link
              to={{
                pathname: repoLink,
              }}
              className="btn btn-sm"
              target="_blank"
            >
              REPOSITORY
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
      <button
        className="btn btn-danger"
        data-value="previous"
        onClick={handleBtnClick}
      >
        Pervious
      </button>
      <button
        className="btn btn-Primary"
        data-value="next"
        onClick={handleBtnClick}
      >
        Next
      </button>
      </div>
      
    </>
  );
}

export default Project;
