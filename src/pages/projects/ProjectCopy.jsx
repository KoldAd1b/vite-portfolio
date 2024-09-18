import React from "react";
import { Link } from "react-router-dom";

const ProjectCopy = ({ description, liveURL, githubURL }) => {
  return (
    <div className="col">
      <p>{description}</p>

      <div className="project-sub-info">
        <Link className="sub-col" to={liveURL} target="_blank">
          <span>&#x2192; Live Demo</span>
        </Link>
        <Link className="sub-col" to={githubURL} target="_blank">
          <span>&#x2192; Github</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCopy;
