import React from "react";
import "./styles/App.scss";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Orchestral from "./pages/Orchestral";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Software from "./pages/Software";
import Design from "./pages/Design";
import Sidebar from "./Sidebar";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="container">
                <Sidebar/>
                <main>
                    <div className="main-container">
                        <Route
                            component={About}
                            exact
                            path="/"
                        />
                        <Route
                            component={Contact}
                            path="/contact"
                        />
                        <Route
                            component={Software}
                            path="/software"
                        />
                        <Route
                            component={Orchestral}
                            path="/music"
                        />
                        <Route
                            component={Design}
                            path="/design"
                        />
                        <Route
                            render={(): JSX.Element => <Redirect to={`/short.php?val=/${window.location.pathname}`}/>}
                        />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
