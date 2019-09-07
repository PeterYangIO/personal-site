import React from "react";
import Header from "./Header";

interface IPageProps {
    children?: JSX.Element | JSX.Element[];
    className?: string;
    subtitle: string;
    title: string;
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
    return (
        <div className={props.className}>
            <Header
                subtitle={props.subtitle}
                title={props.title}
            />
            {props.children}
        </div>
    );
};

export default Page;
