import React, { Component } from "react";
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import NoMatch from "./pages/noMatch";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <h1>BK React Portfolio</h1>
                        <h2>Very good portfolio, thanks.</h2>
                        <div>
                            {moment().format(
                                "MMMM Do YYYY, h:mm:ss a"
                            )}
                        </div>
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
                            <Route
                                exact
                                path="/portfolio/:slug"
                                component={PortfolioDetail}
                            />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
