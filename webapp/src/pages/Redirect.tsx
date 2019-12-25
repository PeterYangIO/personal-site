import React from "react";
import MainContent from "../components/MainContent";
import Page from "../components/Page";

class Redirect extends React.Component {
    constructor(props: {}) {
        super(props);
        window.location.href = Redirect._redirectLink;
    }

    public render(): JSX.Element {
        return (
            <Page subtitle="Taking you to another page" title="Redirecting">
                <MainContent>
                    <div>
                        If you are not redirected within 5 seconds, click <a href={Redirect._redirectLink}>here</a>.
                    </div>
                </MainContent>
            </Page>
        );
    }

    private static get _redirectLink(): string {
        return `/short.php?val=${window.location.pathname}`;
    }
}

export default Redirect;
