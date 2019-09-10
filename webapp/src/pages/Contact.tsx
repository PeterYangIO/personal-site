import React, {useState} from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import Button from "../components/Button";

const Contact: React.FC = (): JSX.Element => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                        placeholder="First and Last"
                        type="text"
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        type="email"
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSubject(event.target.value)}
                        placeholder="Subject"
                        type="text"
                        value={subject}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(event.target.value)}
                        placeholder="Details of comments or questions"
                        rows={5}
                        value={message}
                    />
                </div>
                <Button
                    onClick={async () => {
                        const response: Response = await fetch("/contact?v=3", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                from: name,
                                email,
                                subject,
                                message,
                                // @ts-ignore
                                "g-captcha-response": window.GLOBAL_PETERYANGIO.recaptchaToken
                            })
                        });
                        if (response.ok) {
                            alert("Message submitted");
                        }
                        else {
                            alert("Something went wrong. Please try again later");
                        }
                    }}
                    text="Submit"/>
            </MainContent>
        </Page>
    );
};

export default Contact;
