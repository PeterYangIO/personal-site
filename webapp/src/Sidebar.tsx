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
                    header="Me"
                    links={[
                        {
                            name: "About",
                            href: "/",
                            icon: faUserCircle
                        },
                        {
                            name: "Contact",
                            href: "/contact",
                            icon: faAddressBook
                        },
                        {
                            external: true,
                            name: "Resume",
                            href: "/docs/resume.pdf",
                            icon: faFileAlt
                        }
                    ]}/>
                <NavigationItems
                    header="Portfolio"
                    links={[
                        {
                            name: "Software",
                            href: "/software",
                            icon: faCode
                        },
                        {
                            name: "Orchestral music",
                            href: "/music",
                            icon: faMusic
                        },
                        {
                            name: "Digital design",
                            href: "/design",
                            icon: faPaintBrush
                        }
                    ]}/>
                <NavigationItems
                    header="Links"
                    links={[
                        {
                            external: true,
                            name: "GitHub",
                            href: "https://github.com/peteryangio",
                            icon: faGithub
                        },
                        {
                            external: true,
                            name: "LinkedIn",
                            href: "https://www.linkedin.com/in/peteryangio",
                            icon: faLinkedin
                        },
                        {
                            external: true,
                            name: "YouTube",
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
