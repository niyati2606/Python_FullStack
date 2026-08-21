/*
GitHub Copilot suggestion:

Create a reusable ProjectCard component that accepts
projectName, description, image, and projectLink as props.
Use Bootstrap card classes to display the project details
and provide a button linking to the project.
*/

import React from 'react';

function ProjectCard({
    projectName,
    description,
    image,
    projectLink
}) {
    return (
        <div className="card shadow h-100">
            <img
                src={image}
                className="card-img-top"
                alt={projectName}
                style={{ height: "180px", objectFit: "cover" }}
            />

            <div className="card-body">
                <h5 className="card-title">{projectName}</h5>

                <p className="card-text">
                    {description}
                </p>

                <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;