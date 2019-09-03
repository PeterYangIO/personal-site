import React from "react";
import "../styles/ProjectTile.scss";

interface IProjectTileProps {
    isActive?: boolean;
    title: string;
}

const ProjectTile: React.FC<IProjectTileProps> = (props: IProjectTileProps): JSX.Element => {
    return (
        <div className="project-tile shadow">
            {props.title}
        </div>
    );
};

export default ProjectTile;
