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
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        placeholder="First and Last"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Details of comments or questions"
                        rows={5}
                    />
                </div>
                <Button>
                    submit
                </Button>
            </MainContent>
        </Page>
    );
};

export default Contact;
