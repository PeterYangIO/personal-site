import React from "react";
import Page from "../components/Page";
import ProjectSet from "../components/ProjectSet";

const Orchestral: React.FC = (): JSX.Element => {
    return (
        <Page
            subtitle="Orchestral arranging, music engraving, and realistic mock-ups"
            title="Orchestral Music">
            <ProjectSet projects={[
                {
                    actions: [
                        {
                            text: "Watch"
                        }
                    ],
                    img: "https://placekitten.com/1200/400",
                    title: "Microsoft the Musical",
                    text: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere consequat justo sed dignissim. Donec tincidunt enim ac nunc placerat, a ultrices ante eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eu mollis lacus. Integer malesuada nunc sit amet quam venenatis porttitor. Nullam vitae sapien sagittis, rutrum est nec, laoreet risus. Sed ut magna ultricies, malesuada ante at, elementum nisi. Aenean dictum nibh non turpis tincidunt tincidunt non in nunc."
                    ]
                },
                {
                    actions: [
                        {
                            isSecondary: true,
                            text: "Purchase"
                        },
                        {
                            text: "Watch"
                        }
                    ],
                    title: "Classical Music Mashup",
                    text: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere consequat justo sed dignissim. Donec tincidunt enim ac nunc placerat, a ultrices ante eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eu mollis lacus. Integer malesuada nunc sit amet quam venenatis porttitor. Nullam vitae sapien sagittis, rutrum est nec, laoreet risus. Sed ut magna ultricies, malesuada ante at, elementum nisi. Aenean dictum nibh non turpis tincidunt tincidunt non in nunc.",
                        "Nullam ultricies mollis nunc vitae pellentesque. Nunc ac eleifend velit, vel vehicula magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis risus in massa porttitor, quis porttitor libero pretium. Nulla sapien leo, fringilla at mi sed, efficitur blandit nunc. Duis condimentum leo augue, id lobortis odio faucibus et. Mauris at lorem congue, scelerisque justo id, scelerisque nisi. Phasellus enim elit, mollis sed posuere sed, feugiat sit amet ex. Pellentesque bibendum laoreet turpis condimentum hendrerit. Mauris eget blandit ipsum, vitae sollicitudin turpis. Duis congue lorem et consectetur placerat."
                    ]
                },
                {
                    actions: [
                        {
                            text: "Watch"
                        }
                    ],
                    title: "Opus 5",
                    text: []
                },
                {
                    actions: [
                        {
                            text: "Watch"
                        }
                    ],
                    title: "Hebrides Overture",
                    text: []
                },
                {
                    actions: [
                        {
                            text: "Watch"
                        }
                    ],
                    title: "First of the Year",
                    text: []
                }
            ]}/>
        </Page>
    );
};

export default Orchestral;
