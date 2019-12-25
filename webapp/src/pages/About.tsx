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
                    On the side, I work as a Software Development Manager at <a href="https://acclaimtutor.com/">Acclaim Academic Institute</a> leading a small team of 4 developers.
                    This upcoming August, I will be joining Microsoft as a full time Software Engineer.
                </p>
                <p>
                    In my free time I like to write music for orchestras.
                </p>
            </MainContent>
        </Page>
    );
};

export default About;
