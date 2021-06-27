import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Redirect from "./pages/Redirect";

const About = React.lazy(() => import(/*webpackChunkName: "About" */ "./pages/About"));
const Contact = React.lazy(() => import(/*webpackChunkName: "Contact" */ "./pages/Contact"));
const Orchestral = React.lazy(() => import(/*webpackChunkName: "Orchestral" */ "./pages/Orchestral"));
const Design = React.lazy(() => import(/*webpackChunkName: "Design" */ "./pages/Design"));

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="container">
                <Sidebar />
                <main>
                    <div className="main-container">
                        <React.Suspense fallback={<div />}>
                            <Switch>
                                <Route component={About} exact path="/" />
                                <Route component={Contact} path="/contact" />
                                <Route component={Orchestral} path="/music" />
                                <Route component={Design} path="/design" />
                                <Route component={Redirect} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
