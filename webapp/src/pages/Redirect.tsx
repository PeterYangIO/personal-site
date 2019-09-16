import React, {Component} from "react";

class Redirect extends Component {
    constructor(props: {}) {
        super(props);
        window.location.href = `/short.php?val=${window.location.pathname}`;
    }

    public render(): null {
        return null;
    }
}

export default Redirect;
