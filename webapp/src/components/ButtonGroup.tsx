import React from "react";

interface IButtonGroupProps {
    children: JSX.Element[];
}

const ButtonGroup: React.FC<IButtonGroupProps> = (props: IButtonGroupProps): JSX.Element => {
    return (
        <div className="button-group">
            {props.children}
        </div>
    )
};

export default ButtonGroup;
