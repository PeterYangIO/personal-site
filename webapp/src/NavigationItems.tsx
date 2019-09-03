import React from "react";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

interface INavigationItemsProps {
    header: string;
    links: INavigationItem[];
}

interface INavigationItem {
    external?: boolean;
    href: string;
    icon: IconDefinition;
    name: string;
}

const NavigationItems: React.FC<INavigationItemsProps> = (props: INavigationItemsProps): JSX.Element => {
    return (
        <div className="navigation-items">
            <div className="menu-header">{props.header}</div>
            {
                props.links.map((item: INavigationItem, index: number): JSX.Element => {
                    const Child: React.FC = (): JSX.Element => (
                        <>
                            <FontAwesomeIcon
                                className="m-icon"
                                fixedWidth
                                icon={item.icon}
                            />
                            {item.name}
                        </>
                    );

                    if (item.external) {
                        return (
                            <a
                                className="menu-option"
                                href={item.href}
                                key={index}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Child/>
                            </a>
                        );
                    }
                    else {
                        return (
                            <NavLink
                                activeClassName="active"
                                className="menu-option"
                                key={index}
                                to={item.href}
                            >
                                <Child/>
                            </NavLink>
                        );
                    }
                })
            }
        </div>
    );
};

export default NavigationItems;