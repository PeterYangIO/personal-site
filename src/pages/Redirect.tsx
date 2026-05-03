import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainContent from "../components/MainContent";
import Page from "../components/Page";
import redirects from "../data/redirects.json";

const Redirect: React.FC = (): JSX.Element => {
    const { pathname } = useLocation();
    const destination = (redirects as Record<string, string>)[pathname.toLowerCase()];
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (destination) {
            window.location.href = destination;
        }
    }, [destination]);

    useEffect(() => {
        if (!destination) {
            const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [destination]);

    useEffect(() => {
        if (!destination && countdown <= 0) {
            window.location.href = "/";
        }
    }, [destination, countdown]);

    if (destination) {
        return (
            <Page subtitle="Taking you to another page" title="Redirecting">
                <MainContent>
                    <div>
                        If you are not redirected within 5 seconds, click <a href={destination}>here</a>.
                    </div>
                </MainContent>
            </Page>
        );
    }

    return (
        <Page subtitle="The page you're looking for doesn't exist" title="404">
            <MainContent>
                <div>
                    Redirecting to the home page in {countdown} seconds.
                    Click <a href="/">here</a> if you are not redirected.
                </div>
            </MainContent>
        </Page>
    );
};

export default Redirect;
