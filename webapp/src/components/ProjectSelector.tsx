import React from "react";
import "../styles/ProjectSelector.scss";
import ProjectTile from "./ProjectTile";

interface IProject {
    title: string;
    text: string;
}

interface IProjectSelectorProps {
    projects: IProject[];
}

const ProjectSelector: React.FC<IProjectSelectorProps> = (props: IProjectSelectorProps): JSX.Element => {
    return (
        <div className="project-selector">
            {
                props.projects.map((item: IProject, index: number): JSX.Element => {
                    return (
                        <ProjectTile
                            key={index}
                            title={item.title}
                        />
                    );
                })
            }
        </div>
    );
};

export default ProjectSelector;
