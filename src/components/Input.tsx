import React, {useState} from "react";
import "../styles/Input.scss";

interface IInputProps {
    label: string;
    name: string;
    onChange: (event: React.ChangeEvent<any>) => void;
    rows?: number;
    type?: string;
    value: string;
}

const Input: React.FC<IInputProps> = (props: IInputProps): JSX.Element => {
    const [hasFocus, setFocus] = useState(false);

    return (
        <div className="input">
            <label
                className={props.value || hasFocus ? "filled": "empty"}
                htmlFor={props.name}>
                {props.label}
            </label>
            {
                props.type === "textarea"
                    ? (
                        <textarea
                            id={props.name}
                            onBlur={() => setFocus(false)}
                            onFocus={() => setFocus(true)}
                            placeholder=" "
                            {...props}
                        />
                    )
                    : (
                        <input
                            id={props.name}
                            onBlur={() => setFocus(false)}
                            onFocus={() => setFocus(true)}
                            placeholder=" "
                            type={props.type === undefined ? "text": props.type}
                            {...props}
                        />
                    )
            }
        </div>
    )
};

export default Input;
