import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface INavigationItem {
    external?: boolean;
    href: string;
    icon: IconDefinition;
    name: string;
}
