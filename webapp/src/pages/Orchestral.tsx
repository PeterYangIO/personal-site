import React from "react";
import Page from "../components/Page";
import ProjectSet from "../components/ProjectSet";
import MicrosoftTheMusical from "../img/orchestral/ms-musical.jpg";
import ClassicalMusicMashup from "../img/orchestral/cmm.jpg";

const Orchestral: React.FC = (): JSX.Element => {
    return (
        <Page
            subtitle="Orchestral arranging, music engraving, and realistic mock-ups"
            title="Orchestral Music">
            <ProjectSet projects={[
                {
                    actions: [
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
                            href: "https://store.cdbaby.com/cd/peteryang",
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
                            href: "https://www.youtube.com/watch?v=FYCiSArf43Q",
                            text: "Watch"
                        }
                    ],
                    title: "Dragonhearted",
                    text: [
                        "A large amount of growth of my YouTube channel stemmed from my piano transcriptions / arrangements of the \"Fallen Kingdom\" series published by CaptainSparklez. Dragonhearted is the conclusion of the series so I made sure to make this arrangement special."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=jq_yuJ7ClGY",
                            text: "Watch"
                        }
                    ],
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
                    title: "First of the Year",
                    text: [
                        "This is a demonstration of how quickly I can produce orchestral scores. This composition was named as it is because it was written from start to finish - including all notation - within a day."
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=yNl6LcSIwjE",
                            text: "Watch"
                        }
                    ],
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
                    title: "Frozen Medley for Full Orchestra",
                    text: [
                        "Do You Want to Build a Snowman - Let it Go - For the First Time in Forever - Do You Want to Build a Snowman"
                    ]
                },
                {
                    actions: [
                        {
                            href: "https://www.youtube.com/watch?v=E0ORNaTgavw",
                            text: "Watch"
                        }
                    ],
                    title: "Composition in G",
                    text: [
                        "An entry for the 2013-2014 PTA reflections contest. The theme was \"Inspire, Dream, Believe\"."
                    ]
                }
            ]}/>
        </Page>
    );
};

export default Orchestral;
