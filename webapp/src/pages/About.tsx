import React from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";

const About: React.FC = (): JSX.Element => {
    return (
        <Page
            subtitle="Hi. I'm an art driven techie and a tech driven artist."
            title="Peter Yang">
            <MainContent>
                <p>
                    I am a Senior studying Computer Science / Business Administration at the University of Southern California.
                    I recently completed my internship as a Software Engineer Intern at Microsoft and I'm currently looking for full time opportunities.
                </p>
                <p>
                    In my free time I like to write music for orchestras.
                </p>
            </MainContent>
        </Page>
    );
};

export default About;
