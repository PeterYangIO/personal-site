import React from "react";
import NavigationItems from "./NavigationItems";
import {faAddressBook, faCode, faFileAlt, faMusic, faPaintBrush, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Sidebar: React.FC = (): JSX.Element => {
    return (
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
                            href: "/",
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
    );
};

export default Sidebar;
