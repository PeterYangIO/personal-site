import React from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import logo from "../img/logo.svg";
import "../styles/About.scss";
import {Link} from "react-router-dom";

const About: React.FC = (): JSX.Element => {
    return (
        <Page
            className="about"
            subtitle="Welcome to my website"
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
                    I am a conductor, arranger, and double bassist currently serving as Music Director of the Redmond Tech Orchestra. I focus on reimagining the orchestral experience for modern audiences by pairing classical repertoire with music people already know and love.
                </p>
                <p>
                    My orchestral arrangements of pop and video game music have attracted over 9,000 subscribers on YouTube. You can check out samples on my <Link to="/music">music page</Link>.
                </p>
                <p>
                    By day, I work as a Senior Software Engineer at Microsoft.
                </p>
            </MainContent>
        </Page>
    );
};

export default About;
