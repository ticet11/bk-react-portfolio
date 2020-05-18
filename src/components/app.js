import React, { Component } from "react";
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <NavigationContainer />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/about"
                                component={About}
                            />
                            <Route
                                exact
                                path="/contact"
                                component={Contact}
                            />
                            <Route
                                exact
                                path="/blog"
                                component={Blog}
                            />
                        </Switch>
                    </div>
                </Router>

                <h1>BK React Portfolio</h1>
                <h2>Very good portfolio, thanks.</h2>
                <PortfolioContainer />
                <div>
                    {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </div>
            </div>
        );
    }
}
