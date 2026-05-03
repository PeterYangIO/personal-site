import React from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import Button from "../components/Button";

const Contact: React.FC = (): JSX.Element => {
    return (
        <Page
            subtitle="Let's get in touch"
            title="Contact"
        >
            <MainContent>
                <p>
                    You can reach me via email, which is listed on my YouTube channel.
                </p>
                <Button
                    href="https://www.youtube.com/peteryang/about"
                    text="YouTube Channel"
                />
            </MainContent>
        </Page>
    );
};

export default Contact;
