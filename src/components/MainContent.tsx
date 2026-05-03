import React from "react";
import "../styles/MainContent.scss";
import Button, {IButtonProps} from "./Button";
import ButtonGroup from "./ButtonGroup";

interface IMainContentProps {
    actions?: IButtonProps[];
    children?: JSX.Element | JSX.Element[];
    img?: string;
    title?: string;
    video?: string;
}

const MainContent: React.FC<IMainContentProps> = (props: IMainContentProps): JSX.Element => {
    return (
        <div className="main-content shadow">
            {
                props.img && !props.video &&
                <img
                    alt={props.title}
                    src={props.img}
                />
            }
            {
                props.video &&
                    <div className="video-container">
                        <video
                            autoPlay
                            controls
                            loop
                            muted
                            poster={props.img}
                            src={props.video}
                        />
                    </div>
            }
            <div className="body">
                <div className={props.title ? "body-title" : ""}>
                    {props.title && <h3>{props.title}</h3>}
                    {
                        props.actions &&
                        <ButtonGroup>
                            {
                                props.actions.map((item: IButtonProps, index: number): JSX.Element => (
                                    <Button
                                        key={index}
                                        {...item}/>
                                ))
                            }
                        </ButtonGroup>
                    }
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default MainContent;
