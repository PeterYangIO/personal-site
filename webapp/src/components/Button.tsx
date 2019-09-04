import React from "react";
import "../styles/Button.scss";

interface IButtonProps {
    children?: JSX.Element | JSX.Element[] | string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    return (
        <button className="button">
            {props.children}
        </button>
    );
};

export default Button;
