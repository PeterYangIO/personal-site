import React from "react";
import "../styles/ProjectTile.scss";

interface IProjectTileProps {
    isActive?: boolean;
    onClick: VoidFunction;
    img?: string;
    title: string;
}

const ProjectTile: React.FC<IProjectTileProps> = (props: IProjectTileProps): JSX.Element => {
    return (
        <div
            className={props.isActive ? "project-tile active shadow" : "project-tile shadow"}
            onClick={props.onClick}
            style={
                props.img
                    ? {
                        background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${props.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white"
                    }
                    : {}
            }
        >
            <div className="title">
                {props.title}
            </div>
        </div>
    );
};

export default ProjectTile;
