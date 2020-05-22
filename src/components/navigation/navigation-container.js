import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationContainer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink
                    exact
                    to={route}
                    activeClassName="nav-link-active"
                >
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", {
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch((error) => {
                console.log("error with logout", error);
            });
    };

    return (
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-link-wrapper">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="nav-link-active"
                    >
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink
                        exact
                        to="/about"
                        activeClassName="nav-link-active"
                    >
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink
                        exact
                        to="/contact"
                        activeClassName="nav-link-active"
                    >
                        Contact
                    </NavLink>
                </div>
                {props.loggedInStatus === "LOGGED_IN"
                    ? dynamicLink("/blog", "Blog")
                    : null}
            </div>
            <div className="nav-right">
                Brian Kozub
                {props.loggedInStatus === "LOGGED_IN" ? (
                    <a onClick={handleSignOut}>Logout</a>
                ) : null}
            </div>
        </div>
    );
};

export default withRouter(NavigationContainer);
