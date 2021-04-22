import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../utils/ProjectContext";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"
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
      <div className="card text-center">
        <img src={image} alt="Alt Description" className="card-img-top" />
        <div className="card-body ">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text text-center">{description}</p>
          <div className=" card-text ">
            <h6>Technlogies:</h6>
            <div className="row">
              {technologies.map((tech, index) => (
                <div className="col-md-6">
                  <p key={index}>{tech}</p>
                </div>
              ))}
            </div>
            {/* <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul> */}
          </div>

          <div className="">
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
        <button className="btn" data-value="previous" onClick={handleBtnClick}>
          <AiOutlineArrowLeft />
        </button>
        <button className="btn" data-value="next" onClick={handleBtnClick}>
        <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}

export default Project;
