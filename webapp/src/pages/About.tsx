import React from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import logo from "../img/logo.svg";
import "../styles/About.scss";
import { Link } from "react-router-dom";

const About: React.FC = (): JSX.Element => {
    return (
        <Page className="about" subtitle="Welcome to my website" title="Peter Yang">
            <MainContent>
                <div className="logo-container">
                    <div className="shadow-container">
                        <img alt="Peter logo" className="logo" src={logo} />
                    </div>
                </div>
                <p>
                    I am a Computer Science / Business Administration graduate from the University of Southern
                    California currently working at Microsoft as a Software Engineer.
                </p>
                <p>
                    In my free time I like to make orchestral arrangements of popular music (whether it's pop, film, or
                    games) which you can check out samples of on my <Link to="/music">music page</Link>.
                </p>
            </MainContent>
        </Page>
    );
};

export default About;
