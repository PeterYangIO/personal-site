import React from "react";
import "../styles/MainContent.scss";

interface IMainContentProps {
    img: string;
    text: string;
    title: string;
}

const MainContent: React.FC<IMainContentProps> = (props: IMainContentProps): JSX.Element => {
    return (
        <div className="main-content shadow">
            <img
                alt={props.title}
                src={props.img}
            />
            <div className="body">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default MainContent;
