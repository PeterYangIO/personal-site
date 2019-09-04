import React, {useState} from "react";
import {IProject} from "../models/IProject";
import ProjectSelector from "./ProjectSelector";
import MainContent from "./MainContent";

interface IProjectSetProps {
    projects: IProject[];
}

const ProjectSet: React.FC<IProjectSetProps> = (props: IProjectSetProps): JSX.Element => {
    const [project, setProject] = useState(props.projects[0]);

    return (
        <div>
            <ProjectSelector
                projects={props.projects}
                setProject={setProject}
                selectedProject={project}
            />
            <MainContent
                actions={project.actions}
                img={project.img}
                title={project.title}
            >
                {
                    project.text.map(
                        (item: string, index: number): JSX.Element => <p key={index}>{item}</p>
                    )
                }
            </MainContent>
        </div>
    )
};

export default ProjectSet;
