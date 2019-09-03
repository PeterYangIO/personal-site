import React from "react";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface INavigationItemsProps {
    header: string;
    links: INavigationItem[];
}

interface INavigationItem {
    icon: IconDefinition;
    name: string;
}

const NavigationItems: React.FC<INavigationItemsProps> = (props: INavigationItemsProps): JSX.Element => {
    return (
        <div className="navigation-items">
            <div className="menu-header">{props.header}</div>
            {
                props.links.map((item: INavigationItem) => {
                    return (
                        <div className="menu-option">
                            <FontAwesomeIcon
                                className="m-icon"
                                fixedWidth
                                icon={item.icon}
                            />
                            {item.name}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default NavigationItems;