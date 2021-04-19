import React from "react"

const ProjectContext = React.createContext({
    title:"",
    image:"",
    description:"",
    technologies:[],
    appLink:"",
    repoLink:""
});

export default ProjectContext;