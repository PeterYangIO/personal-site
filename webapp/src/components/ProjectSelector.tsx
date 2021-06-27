import React, { MouseEventHandler } from "react";
import "../styles/ProjectSelector.scss";
import ProjectTile from "./ProjectTile";
import { IProject } from "../models/IProject";
import DragScrollProvider from "drag-scroll-provider";

interface IProjectSelectorProps {
    projects: IProject[];
    selectedProject: IProject;
    setProject: (project: IProject) => void;
}

interface IDragScrollProviderChildren {
    onMouseDown: MouseEventHandler<any>;
    ref: React.RefObject<any>;
    clickItem: (onClick: VoidFunction) => void;
}

const ProjectSelector: React.FC<IProjectSelectorProps> = (props: IProjectSelectorProps): JSX.Element => {
    return (
        <DragScrollProvider>
            {({ onMouseDown, ref, clickItem }: IDragScrollProviderChildren) => (
                <div className="project-selector" ref={ref} onMouseDown={onMouseDown}>
                    {props.projects.map(
                        (item: IProject, index: number): JSX.Element => {
                            return (
                                <ProjectTile
                                    isActive={item === props.selectedProject}
                                    key={index}
                                    onClick={(): void => clickItem(() => props.setProject(item))}
                                    img={item.img}
                                    title={item.title}
                                />
                            );
                        }
                    )}
                </div>
            )}
        </DragScrollProvider>
    );
};

export default ProjectSelector;
