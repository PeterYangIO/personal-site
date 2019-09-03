import React from "react";
import Header from "./Header";

interface IPageProps {
    subtitle: string;
    title: string;
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
    return (
        <>
            <Header
                subtitle={props.subtitle}
                title={props.title}
            />
        </>
    );
};

export default Page;
