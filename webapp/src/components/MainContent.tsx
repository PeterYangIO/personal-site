import React from "react";
import "../styles/MainContent.scss";

interface IMainContentProps {
    children?: JSX.Element | JSX.Element[];
    img?: string;
    title?: string;
}

const MainContent: React.FC<IMainContentProps> = (props: IMainContentProps): JSX.Element => {
    return (
        <div className="main-content shadow">
            {
                props.img &&
                <img
                    alt={props.title}
                    src={props.img}
                />
            }
            <div className="body">
                {props.title && <h3>{props.title}</h3>}
                {props.children}
            </div>
        </div>
    );
};

export default MainContent;
