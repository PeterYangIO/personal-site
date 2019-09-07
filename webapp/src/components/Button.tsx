import React from "react";
import "../styles/Button.scss";

export interface IButtonProps {
    text: string;
    onClick?: VoidFunction;
    href?: string;
    isSecondary?: boolean;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    return (
        <button
            className={`${props.isSecondary ? "button secondary" : "button"}`}
            onClick={props.onClick}
        >
            {
                props.href
                    ? (
                        <a
                            href={props.href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {props.text}
                        </a>
                    )
                    : <span>{props.text}</span>
            }
        </button>
    );
};

export default Button;
