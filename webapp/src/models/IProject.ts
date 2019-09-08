import {IButtonProps} from "../components/Button";

export interface IProject {
    actions?: IButtonProps[];
    img?: string;
    title: string;
    text: string[];
    video?: string;
}
