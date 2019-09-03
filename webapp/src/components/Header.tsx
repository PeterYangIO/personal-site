import React from "react";

interface IHeaderProps {
    subtitle: string;
    title: string;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps): JSX.Element => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    );
};

export default Header;
