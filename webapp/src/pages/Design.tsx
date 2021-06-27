import React from "react";
import Page from "../components/Page";
import ProjectSet from "../components/ProjectSet";
import HYO from "../img/design/hyo.jpg";
// @ts-ignore
import HYOVideo from "../video/design/hyo.mp4";
import MufidGun from "../img/design/mufid.jpg";
// @ts-ignore
import MufidVideo from "../video/design/mufid.mp4";
import Robot from "../img/design/robot.jpg";
// @ts-ignore
import RobotVideo from "../video/design/robot.mp4";
import SpringShow from "../img/design/springshow.jpg";
import Mountain from "../img/design/mountain.jpg";
// @ts-ignore
import MountainVideo from "../video/design/mountain.mp4";
import WaterBottle from "../img/design/waterbottle.jpg";

const Design: React.FC = (): JSX.Element => {
    return (
        <Page subtitle="UI/UX design, graphic design, and video production" title="Design">
            <ProjectSet
                projects={[
                    {
                        actions: [
                            {
                                href: "https://hackyourown.org",
                                text: "Website"
                            }
                        ],
                        img: HYO,
                        title: "Hack Your Own",
                        text: [
                            "I created the website mockup for Hack Your Own with Figma and with closely with the developers to see that it could be implemented into a live site."
                        ],
                        video: HYOVideo
                    },
                    {
                        actions: [
                            {
                                href: "https://ascendtovictory.com",
                                text: "Website"
                            }
                        ],
                        img: MufidGun,
                        title: "Mufid Gun",
                        text: [
                            'Provided 3D prop assets notably the "Mufid Gun" for one of USC\'s Advanced Game Projects (AGP) for the 2019 year.'
                        ],
                        video: MufidVideo
                    },
                    {
                        img: Robot,
                        title: "Dreadnought Robot Reveal",
                        text: [
                            "Using an imported CAD model and Blender 3D, I was able to create and sync a CG robot reveal video deeply inspired by the original Surface Studio reveal.",
                            "Watch with sound on!"
                        ],
                        video: RobotVideo
                    },
                    {
                        actions: [
                            {
                                href: "https://www.youtube.com/watch?v=r7LZ5IpOafA",
                                text: "Watch"
                            }
                        ],
                        img: SpringShow,
                        title: "Spring Show Poster",
                        text: ["View the video to see a time lapse of my design process."]
                    },
                    {
                        img: Mountain,
                        title: "Blender 3D Ad",
                        text: [
                            "This low poly model was created and rendered in Blender 3D as promotional material for my school's graphic design club. The turning animation goes between a wireframe and rendered view."
                        ],
                        video: MountainVideo
                    },
                    {
                        img: WaterBottle,
                        title: "Bottle Launch Ad",
                        text: [
                            "My Physics teacher asked me to create a digital version of a handdrawn concept another student made. I decided to redraw it in 3D space and did some post-compositing in Photoshop."
                        ]
                    }
                ]}
            />
        </Page>
    );
};

export default Design;
