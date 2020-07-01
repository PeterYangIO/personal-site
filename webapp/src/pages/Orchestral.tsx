import React from "react";
import Page from "../components/Page";
import ProjectSet from "../components/ProjectSet";

import TwoSetDuet from "../img/orchestral/2setduet.jpg";
import Halo from "../img/orchestral/halo.jpg";
import Lava from "../img/orchestral/lava.jpg";
import Frozen2 from "../img/orchestral/frozen2.jpg";
import MicrosoftTheMusical from "../img/orchestral/ms-musical.jpg";
import ClassicalMusicMashup from "../img/orchestral/cmm.jpg";
import Battlefield from "../img/orchestral/battlefield.jpg";
import PPAP from "../img/orchestral/ppap.jpg";
import Opus5 from "../img/orchestral/opus5.jpg";
import Hebrides from "../img/orchestral/hebrides.jpg";
import FirstOfTheYear from "../img/orchestral/firstyear.jpg";
import Sandstorm from "../img/orchestral/sandstorm.jpg";
import CounterpointOverWar from "../img/orchestral/counterpoint.jpg";
import PianoEb from "../img/orchestral/pianoeb.jpg";
import Frozen1 from "../img/orchestral/frozen1.jpg";
import CompositionInG from "../img/orchestral/compg.jpg";

import { withRouter, RouteComponentProps } from "react-router-dom";
import {IButtonProps} from "../components/Button";

const Orchestral: React.FC<RouteComponentProps> = (props: RouteComponentProps): JSX.Element => {
    const sheetMusicAction: IButtonProps = {
        isSecondary: true,
        onClick: () => props.history.push("contact"),
        text: "Sheet music"
    };

    return (
        <Page
            subtitle="Orchestral arranging, music engraving, and realistic mock-ups"
            title="Orchestral Music">
            <ProjectSet projects={[
                {
                    actions: [
                        {
                            isSecondary: true,
                            href: "/docs/2Set%20Duet/2Set%20Duet.pdf",
                            text: "Sheet music"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=pdNoHtQjgp4",
                            text: "Watch"
                        }
                    ],
                    img: TwoSetDuet,
                    title: "2Set Duet, Op. 6",
                    text: [
                        "A fast, boisterous violin duet with double stops and open strings. Written for TwoSet when they made an open submission request on Twitter."
                    ]
                },
                {
                    actions: [
                        sheetMusicAction,
                        {
                            href: "https://www.youtube.com/watch?v=MWvYshoTiZk",
                            text: "Watch"
                        }
                    ],
                    img: Halo,
                    title: "Halo Orchestral Suite",
                    text: [
                        "The arrival of Halo: MCC on Steam re-ignited my interest in the series and with Halo Infinite coming out, I figured I'd put together an orchestral suite of some of the best OST tracks throughout the series thus far!",
                        "\"Lone Wolf\" – Halo: Reach",
                        "\"Behold a Pale Horse\" – Halo 3",
                        "\"Halo Theme (Mjolnir Mix)\" – Halo 2",
                        "\"The Trials\" – Halo 5: Guardians",
                        "\"A Spartan Rises\" – Halo 2: Anniversary",
                        "\"Never Forget\" – Halo 3",
                        "\"Epilogue\" – Halo: Reach",
                        "\"Finish the Fight\" – Halo 3"
                    ]
                },
                {
                    actions: [
                        sheetMusicAction,
                        {
                            href: "https://www.youtube.com/watch?v=guM_ei-7LpE",
                            text: "Watch"
                        },
                    ],
                    img: Lava,
                    title: "Lava",
                    text: [
                        "Orchestration of \"Lava\" from Disney Pixar's Lava which was featured right before the start of Inside Out!"
                    ]
                },
                {
                    actions: [
                        sheetMusicAction,
                        {
                            href: "https://www.youtube.com/watch?v=CYB5d7IC5Qk",
                            text: "Watch"
                        }
                    ],
                    img: Frozen2,
                    title: "Frozen 2 Medley",
                    text: [
                        "A fun collection of themes from Frozen 2, arranged into an orchestral medley!",
                        "Into the Unknown (brief intro)",
                        "Show Yourself",
                        "All Is Found",
                        "Do You Want to Build a Snowman (brief reference)",
                        "Into the Unknown",
                        "Vuelie (theme) / Teaser Trailer Music / Conclusion"
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://open.spotify.com/track/4oJrppERZHu5fuIa22g0aF?si=cbvXWskBRLCMgJjCoQBN_w",
                            isSecondary: true,
                            text: "Audio"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=J2H4w_UWZ-A",
                            isSecondary: true,
                            text: "Sheet music"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=ZGeWNR8CWnA",
                            text: "Watch"
                        }
                    ],
                    img: MicrosoftTheMusical,
                    title: "Microsoft the Musical",
                    text: [
                        "While interning at Microsoft as a Software Developer, a group of interns had an idea: To create and produce a Tony Awards-style musical theater opening number. Thanks to the hard work of 150 interns and employees, we were able to publish this musical in a span of 8 weeks from first lyric to finish.",
                        "As the orchestrator and conductor for this project, I was able to combine my own style of big sweeping orchestras with the upbeat style of Broadway all while incorporating a number of pop culture references.",
                        "The orchestration was done within the span of 2 weeks with an additional week of rehearsal before spending a day in a recording studio. I learned a lot more about working with live musicians as I got to interact with 40 talented individuals, most of them with more experience on their instrument than I have with orchestration."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://open.spotify.com/album/6KyYM6Rcm8ksN5GltrzNFo?si=9bN6iWhmSl-XX5MSmwHvtw",
                            isSecondary: true,
                            text: "Audio"
                        },
                        {
                            href: "https://www.jwpepper.com/sheet-music/search.jsp?keywords=Classical+Music+Mashup+Peter+Yang",
                            isSecondary: true,
                            text: "Sheet music"
                        },
                        {
                            href: "https://www.youtube.com/watch?v=sSYRCBK13Kk",
                            text: "Watch"
                        }
                    ],
                    img: ClassicalMusicMashup,
                    title: "Classical Music Mashup",
                    text: [
                        "The original Classical Music Mashup is now brought to you in a wonderful symphonic experience!",
                        "This piece was originally arranged by Grant Woolard for 3 pianos and features 57 classical tunes by 32 composers. I adapted his work to use an expansive set of orchestral textures ranging from the massive orchestration Holst used in the Jupiter down to a tight duet between a single Flute and Violin.",
                        "Score and parts are available for purchase for full orchestra, concert band, and string orchestra."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=Eb5iwda82uM",
                            text: "Watch"
                        }
                    ],
                    img: Battlefield,
                    title: "Battlefield Theme",
                    text: [
                        "With the release of Battlefield 1, I decided to make an orchestral cover of the theme song, based off of the legacy 1942 theme.",
                        "In this arrangement, I included an allusion to the Taps melody in respect for those who lost their lives during the World War. Battlefield 1 makes an amazing point of demonstrating the loss of lives particularly at the start of the campaign where you see names and death years of young men rather than simply respawning. The tragic events of World War I was not completely detrimental. In the aftermath of the war, America found ways to lighten the mood, and thus the Jazz Era was born. I hope you enjoy the little jazzy tidbit towards the end.",
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=4pFTuZxIdwQ",
                            text: "Watch"
                        }
                    ],
                    img: PPAP,
                    title: "PPAP",
                    text: [
                        "Pen Pineapple Apple Pen by Pikotaro quickly went viral because of the ridiculousness of the whole concept. I figured since it was such a short snippet, I might as well orchestrate to get in on the fun!"
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=jq_yuJ7ClGY",
                            text: "Watch"
                        }
                    ],
                    img: Opus5,
                    title: "Opus 5",
                    text: [
                        "This piece beings with a very dark mood and continues development with a heroic motif. At the conclusion of that phrase, a seemingly playful dance is heard before being taken over by the stomping march of darkness."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=qWDWLrXNJRs",
                            text: "Watch"
                        }
                    ],
                    img: Hebrides,
                    title: "Hebrides Overture",
                    text: [
                        "The Hebrides is a popular composition by Mendelssohn originally written for strings, double woodwinds, 2 natural horns, 2 trumpets, and 2 timpani. I felt like the fire of the beast within the cave could benefit from a more ferocious instrumentation so I rewrote the ending theme with an extensive instrumentation."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=WXEVlneZDdk",
                            text: "Watch"
                        }
                    ],
                    img: FirstOfTheYear,
                    title: "First of the Year",
                    text: [
                        "This is a demonstration of how quickly I can produce orchestral scores. This composition was named as it is because it was written from start to finish - including all notation - within a day."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=LKPgfmi25HI",
                            text: "Watch"
                        }
                    ],
                    img: Sandstorm,
                    title: "Sandstorm",
                    text: [
                        "Around 2016, the YouTube comments section had a running joke where whenever someone asked \"Song name?\" they would be answered with \"Darude Sandstorm\" no matter what the actual song was. It was quite the meme so I put together a meme arrangement with MLG horns and hitmarkers to be released on April 1st as a joke."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=yNl6LcSIwjE",
                            text: "Watch"
                        }
                    ],
                    img: CounterpointOverWar,
                    title: "Counterpoint Over War",
                    text: [
                        "This was an entry for the PTA Reflections contest. The theme was \"The world would be a better place if...\" and I decided to illustrate how music can make everything better. The battle between harsh dissonances and harmonic melodies symbolize the good of music."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=tThQDDgDw24",
                            text: "Watch"
                        }
                    ],
                    img: PianoEb,
                    title: "Piano & Winds in Eb",
                    text: [
                        "This is a slow piece for a woodwind quartet with little musical development throughout the piece while maintaining a calm mood"
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=1cx7A2Fc0bQ",
                            text: "Watch"
                        }
                    ],
                    img: Frozen1,
                    title: "Frozen Medley",
                    text: [
                        "Do You Want to Build a Snowman",
                        "Let it Go",
                        "For the First Time in Forever",
                        "Do You Want to Build a Snowman"
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=E0ORNaTgavw",
                            text: "Watch"
                        }
                    ],
                    img: CompositionInG,
                    title: "Composition in G",
                    text: [
                        "An entry for the 2013-2014 PTA reflections contest. The theme was \"Inspire, Dream, Believe\"."
                    ]
                }
            ]}/>
        </Page>
    );
};

export default withRouter(Orchestral);
