import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import {INavigationItem} from "./models/INavigationItem";

interface INavigationItemsProps {
    header: string;
    links: INavigationItem[];
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
                                exact
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
