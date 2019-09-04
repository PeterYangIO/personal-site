import React from "react";
import Page from "../components/Page";
import ProjectSelector from "../components/ProjectSelector";
import MainContent from "../components/MainContent";

const Orchestral: React.FC = (): JSX.Element => {
    return (
        <Page
            subtitle="Orchestral arranging, music engraving, and realistic mock-ups"
            title="Orchestral Music">
            <ProjectSelector
                projects={[
                    {
                        title: "Microsoft the Musical",
                        text: "Lorem"
                    },
                    {
                        title: "Classical Music Mashup",
                        text: "Lorem"
                    }
                ]}
            />
            <MainContent
                img="https://via.placeholder.com/1200x400"
                title="Microsoft the Musical"
            />
        </Page>
    );
};

export default Orchestral;
