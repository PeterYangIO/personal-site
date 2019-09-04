import React from "react";
import "../styles/ProjectSelector.scss";
import ProjectTile from "./ProjectTile";
import {IProject} from "../models/IProject";
import ScrollContainer from "react-indiana-drag-scroll";

interface IProjectSelectorProps {
    projects: IProject[];
    selectedProject: IProject;
    setProject: (project: IProject) => void;
}

const ProjectSelector: React.FC<IProjectSelectorProps> = (props: IProjectSelectorProps): JSX.Element => {
    return (
        <ScrollContainer>
            <div className="project-selector">
                {
                    props.projects.map((item: IProject, index: number): JSX.Element => {
                        return (
                            <ProjectTile
                                isActive={item === props.selectedProject}
                                key={index}
                                onClick={(): void => props.setProject(item)}
                                img={item.img}
                                title={item.title}
                            />
                        );
                    })
                }
            </div>
        </ScrollContainer>
    );
};

export default ProjectSelector;
