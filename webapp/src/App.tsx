import React from "react";
import "./App.scss";
import NavigationItems from "./NavigationItems";
import {faAddressBook, faCode, faMusic, faPaintBrush, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

const App: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <nav>
                <div className="nav-links">
                    <div className="my-name">
                        Peter Yang
                    </div>
                    <NavigationItems
                        header="me"
                        links={[
                            {
                                name: "about",
                                icon: faUserCircle
                            },
                            {
                                name: "contact",
                                icon: faAddressBook
                            }
                        ]}/>
                    <NavigationItems
                        header="portfolio"
                        links={[
                            {
                                name: "software",
                                icon: faCode
                            },
                            {
                                name: "orchestral music",
                                icon: faMusic
                            },
                            {
                                name: "digital design",
                                icon: faPaintBrush
                            }
                        ]}/>
                        <NavigationItems
                            header="links"
                            links={[
                                {
                                    name: "github",
                                    icon: faGithub
                                },
                                {
                                    name: "linkedin",
                                    icon: faLinkedin
                                },
                                {
                                    name: "youtube",
                                    icon: faYoutube
                                }
                            ]}/>
                    </div>
                <div className="font-light">
                    &copy; 2016 &ndash; {new Date().getFullYear()}
                </div>
            </nav>
            <main>

            </main>
        </div>
    );
};

export default App;
