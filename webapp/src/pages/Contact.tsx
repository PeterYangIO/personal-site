import React, {useState} from "react";
import Page from "../components/Page";
import MainContent from "../components/MainContent";
import Button from "../components/Button";
import "../styles/Contact.scss";
import Input from "../components/Input";

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
                <Input
                    label="Name"
                    name="name"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                    value={name}
                />
                <Input
                    label="Email"
                    name="email"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value)}
                    type="email"
                    value={email}
                />
                <Input
                    label="Subject"
                    name="subject"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSubject(event.target.value)}
                    value={subject}
                />
                <Input
                    label="Message"
                    name="message"
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(event.target.value)}
                    rows={5}
                    type="textarea"
                    value={message}
                />
                <Button
                    onClick={async () => {
                        const response: Response = await fetch("/api/contact/", {
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
                                "g-recaptcha-response": window.GLOBAL_PETERYANGIO.recaptchaToken
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
                <div className="recaptcha-disclaimer">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}and{" "}
                    <a href="https://policies.google.com/terms">Terms of Service</a>{" "}apply.
                </div>
            </MainContent>
        </Page>
    );
};

export default Contact;
