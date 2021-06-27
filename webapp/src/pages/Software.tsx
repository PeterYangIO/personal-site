import React from "react";
import Page from "../components/Page";
import ProjectSet from "../components/ProjectSet";
import Hacktech2017 from "../img/software/hacktech.jpg";
import Bready from "../img/software/bready.jpg";

const Software: React.FC = (): JSX.Element => {
    return (
        <Page subtitle="Full stack web development" title="Software">
            <ProjectSet
                projects={[
                    {
                        actions: [
                            {
                                href: "https://devpost.com/software/twitchstonks",
                                text: "Devpost"
                            }
                        ],
                        title: "TwitchStonks",
                        text: ["TwitchCon Hackathon 2019", "Visit the Devpost for more information"]
                    },
                    {
                        actions: [
                            {
                                href: "https://devpost.com/software/hitch-n-ditch",
                                text: "Devpost"
                            }
                        ],
                        title: "Hitch 'n Ditch",
                        text: ["HackSC 2019", "Visit the Devpost for more information"]
                    },
                    {
                        actions: [
                            {
                                href: "https://devpost.com/software/dog-instrucc",
                                text: "Devpost"
                            }
                        ],
                        title: "Dog Instrucc",
                        text: ["SLOHacks 2019", "Visit the Devpost for more information"]
                    },
                    {
                        actions: [
                            {
                                href: "https://tespaow.schemes.me/",
                                text: "Website"
                            }
                        ],
                        title: "TCS Overwatch ELO Rankings",
                        text: []
                    },
                    {
                        actions: [
                            {
                                href: "https://devpost.com/software/hacktech2017",
                                text: "Devpost"
                            }
                        ],
                        img: Hacktech2017,
                        title: "Hacktech 2017",
                        text: [
                            "Vision API in its current state is rather impressive but we can only get so much data from it. Though it can look at the image and guess what is in it, it fails to make any connection between images. We have accomplished this and went on to compare it to what a user community interpreted it as.",
                            "For our image source, we took top images from popular subreddits and fed them into Microsoft's Computer Vision API. The API would return a JSON, providing guesses of what was inside of the image and a related confidence value. Using this JSON information and many other images, we created a graph correlating images to one another. We would take matching pairs of word descriptors (from the vision API), their respective confidence values, and average it all out to come up with a similarity value from 0 to 1 between any image.",
                            "Next, since we took these images directly from Reddit, we were able to use Reddit's API to scrape the comments from the thread. We analyzed the frequencies of words and compared them to the frequencies of words to other threads and also assigned a similarity value from 0 to 1."
                        ]
                    },
                    {
                        actions: [
                            {
                                href: "https://bready.xyz",
                                text: "Website"
                            }
                        ],
                        img: Bready,
                        title: "Bready",
                        text: [
                            "Bready is an entry for the 2016 FBLA Web Site Design Competition. This projected was completed with one other teammate. We were prompted to create a website for a baker who was opening up a bakery/restaurant focusing on marketing gluten/wheat free foods. We took that topic and developed a style and branding guidelines in order to effectively market the bakery.",
                            "This website was created without the use of any templates, built with HTML, CSS, JS, jQuery, PHP, and SQL. We competed at California's FBLA State competition and were named State Champions (1st place). We took it to Nationals and placed 9th."
                        ]
                    }
                ]}
            />
        </Page>
    );
};

export default Software;
