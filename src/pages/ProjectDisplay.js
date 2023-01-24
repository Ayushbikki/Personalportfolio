import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const url = project.url;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img alt={project.name} src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon onClick={event =>  window.location.href= url}  />
    </div>
  );
}

export default ProjectDisplay;
