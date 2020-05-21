import React, { Component } from "react";
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
import Auth from "./pages/auth";
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
        };
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(
            this
        );
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(
            this
        );
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN",
        });
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatusL: "NOT_LOGGED_IN",
        });
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <NavigationContainer />
                        <h2>{this.state.loggedInStatus}</h2>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/about"
                                component={About}
                            />
                            <Route
                                exact
                                path="/auth"
                                render={(props) => (
                                    <Auth
                                        {...props}
                                        handleSuccessfulLogin={
                                            this.handleSuccessfulLogin
                                        }
                                        handleUnSuccessfulLogin={
                                            this
                                                .handleUnsuccessfulLogin
                                        }
                                    />
                                )}
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
