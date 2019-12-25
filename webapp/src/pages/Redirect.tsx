import React from "react";

class Redirect extends React.Component {
    constructor(props: {}) {
        super(props);
        window.location.href = `/short.php?val=${window.location.pathname}`;
    }

    public render(): null {
        return null;
    }
}

export default Redirect;
