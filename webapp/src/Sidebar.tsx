import React, {useState} from "react";
import NavigationItems from "./NavigationItems";
import {
    faAddressBook,
    faBars,
    faCode,
    faFileAlt,
    faMusic,
    faPaintBrush,
    faTimes,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div
                id="nav-icon"
                onClick={() => setOpen(!isOpen)}
            >
                <FontAwesomeIcon
                    fixedWidth
                    icon={isOpen ? faTimes : faBars}
                />
            </div>
            <nav
                className={isOpen ? "" : "hide"}
                onClick={() => setOpen(false)}
            >
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
                                name: "Music",
                                href: "/music",
                                icon: faMusic
                            },
                            {
                                name: "Design",
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
        </>
    );
};

export default Sidebar;
