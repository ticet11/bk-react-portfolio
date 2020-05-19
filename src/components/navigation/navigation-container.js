import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-right">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink exact to="/about">
                        About
                    </NavLink>
                    <NavLink exact to="/contact">
                        Contact
                    </NavLink>
                    <NavLink exact to="/blog">
                        Blog
                    </NavLink>
                    {false ? (
                        <NavLink exact to="/">
                            Add Blog Post
                        </NavLink>
                    ) : null}
                </div>
                <div className="nav-right">Brian Kozub</div>
            </div>
        );
    }
}
