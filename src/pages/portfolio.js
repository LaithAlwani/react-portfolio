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
  

  const loadProject = () => {
    console.log("Project loaded");
  };

  return (
      <ProjectContext.Provider value={projectContext}>
          <Project />
      </ProjectContext.Provider>
  );
}

export default Portfolio;
