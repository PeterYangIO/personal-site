import React, { useState } from "react";
import NavigationItems from "./NavigationItems";
import { faAddressBook, faBars, faMusic, faPaintBrush, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGithub, faLinkedin, faSpotify, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div id="nav-icon" onClick={() => setOpen(!isOpen)}>
                <FontAwesomeIcon fixedWidth icon={isOpen ? faTimes : faBars} />
            </div>
            <nav className={isOpen ? "" : "hide"} onClick={() => setOpen(false)}>
                <div className="nav-links">
                    <div className="my-name">Peter Yang</div>
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
                            }
                        ]}
                    />
                    <NavigationItems
                        header="Projects"
                        links={[
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
                            // {
                            //     name: "Software",
                            //     href: "/software",
                            //     icon: faCode
                            // }
                        ]}
                    />
                    <NavigationItems
                        header="Links"
                        links={[
                            {
                                external: true,
                                name: "YouTube",
                                href: "https://www.youtube.com/peteryang",
                                icon: faYoutube
                            },
                            {
                                external: true,
                                name: "Spotify",
                                href: "https://open.spotify.com/artist/3FNq1NBXDl0Mjifwn1Myuq",
                                icon: faSpotify
                            },
                            {
                                external: true,
                                name: "Apple Music",
                                href: "https://music.apple.com/us/artist/peter-yang/1497672097",
                                icon: faApple
                            },
                            {
                                external: true,
                                name: "Twitter",
                                href: "https://twitter.com/peteryangio",
                                icon: faTwitter
                            },
                            {
                                external: true,
                                name: "LinkedIn",
                                href: "https://www.linkedin.com/in/peteryangio",
                                icon: faLinkedin
                            },
                            {
                                external: true,
                                name: "GitHub",
                                href: "https://github.com/peteryangio",
                                icon: faGithub
                            }
                        ]}
                    />
                </div>
                <div className="font-light">&copy; 2016 &ndash; {new Date().getFullYear()}</div>
            </nav>
        </>
    );
};

export default Sidebar;
