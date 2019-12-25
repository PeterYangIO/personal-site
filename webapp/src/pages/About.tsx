import React from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import logo from "../img/logo.svg";
import "../styles/About.scss";

const About: React.FC = (): JSX.Element => {
    return (
        <Page
            className="about"
            subtitle="Hi. I'm an art driven techie and a tech driven artist."
            title="Peter Yang">
            <MainContent>
                <div className="logo-container">
                    <div className="shadow-container">
                        <img
                            alt="Peter logo"
                            className="logo"
                            src={logo}
                        />
                    </div>
                </div>
                <p>
                    I am a Senior studying Computer Science / Business Administration at the University of Southern California.
                </p>
                <p>
                    In my free time I like to write music for orchestras.
                </p>
            </MainContent>
        </Page>
    );
};

export default About;
