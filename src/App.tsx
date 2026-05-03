import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Redirect from "./pages/Redirect";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Orchestral = React.lazy(() => import("./pages/Orchestral"));
const Design = React.lazy(() => import("./pages/Design"));

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter basename="/personal-site">
            <div className="container">
                <Sidebar />
                <main>
                    <div className="main-container">
                        <React.Suspense fallback={<div />}>
                            <Routes>
                                <Route path="/" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/music" element={<Orchestral />} />
                                <Route path="/design" element={<Design />} />
                                <Route path="*" element={<Redirect />} />
                            </Routes>
                        </React.Suspense>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
