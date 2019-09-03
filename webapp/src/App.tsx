import React from "react";
import "./styles/App.scss";
import NavigationItems from "./NavigationItems";
import {faAddressBook, faCode, faFileAlt, faMusic, faPaintBrush, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Route} from "react-router-dom";
import Orchestral from "./pages/Orchestral";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Software from "./pages/Software";
import Design from "./pages/Design";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
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
                                    href: "/about",
                                    icon: faUserCircle
                                },
                                {
                                    name: "contact",
                                    href: "/contact",
                                    icon: faAddressBook
                                },
                                {
                                    external: true,
                                    name: "resume",
                                    href: "/docs/resume.pdf",
                                    icon: faFileAlt
                                }
                            ]}/>
                        <NavigationItems
                            header="portfolio"
                            links={[
                                {
                                    name: "software",
                                    href: "/software",
                                    icon: faCode
                                },
                                {
                                    name: "orchestral music",
                                    href: "/music",
                                    icon: faMusic
                                },
                                {
                                    name: "digital design",
                                    href: "/design",
                                    icon: faPaintBrush
                                }
                            ]}/>
                            <NavigationItems
                                header="links"
                                links={[
                                    {
                                        external: true,
                                        name: "github",
                                        href: "https://github.com/peteryangio",
                                        icon: faGithub
                                    },
                                    {
                                        external: true,
                                        name: "linkedin",
                                        href: "https://www.linkedin.com/in/peteryangio",
                                        icon: faLinkedin
                                    },
                                    {
                                        external: true,
                                        name: "youtube",
                                        href: "https://www.youtube.com/peteryang",
                                        icon: faYoutube
                                    }
                                ]}/>
                        </div>
                    <div className="font-light">
                        &copy; 2016 &ndash; {new Date().getFullYear()}
                    </div>
                </nav>
                <main>
                    <Route
                        component={About}
                        exact
                        path="/"
                    />
                    <Route
                        component={About}
                        path="/about"
                    />
                    <Route
                        component={Contact}
                        path="/contact"
                    />
                    <Route
                        component={Software}
                        path="/software"
                    />
                    <Route
                        component={Orchestral}
                        path="/music"
                    />
                    <Route
                        component={Design}
                        path="/design"
                    />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
