import React, { useState, useEffect } from "react";
import Project from "../components/project";
import ProjectContext from "../utils/ProjectContext";
import Projects from "../utils/Projects"

function Portfolio() {
  const [projectContext, setProjectContext] = useState({
    title: "",
    image: "",
    description: "",
    technologies: [],
    appLink: "",
    repoLink: "",
  });
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    setProjectContext(Projects[0]);
    
  }, []);
  
  function nextProject(projectIndex) {
    // Ensure that the user index stays within our range of users
    if (projectIndex >= Projects.length) {
      projectIndex = 0;
    }
    setProjectContext(Projects[projectIndex]);
    setProjectIndex(projectIndex);
    
  }

  function previousProject(projectIndex) {
    // Ensure that the user index stays within our range of users
    if (projectIndex < 0) {
      projectIndex = Projects.length - 1;
    }
    setProjectContext(Projects[projectIndex]);
    setProjectIndex(projectIndex);
    
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newProjectIndex = projectIndex + 1;
      nextProject(newProjectIndex);
    } else {
      const newProjectIndex = projectIndex - 1;
      previousProject(newProjectIndex);
    }
  }

  return (
      <ProjectContext.Provider value={projectContext}>
          <Project handleBtnClick={handleBtnClick}/>
      </ProjectContext.Provider>
  );
}

export default Portfolio;
