import React from "react";
import "../styles/Button.scss";

export interface IButtonProps {
    text: string;
    onClick?: VoidFunction;
    isSecondary?: boolean;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    return (
        <button
            className={`${props.isSecondary ? "button secondary" : "button"}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
