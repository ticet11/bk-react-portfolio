import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('portfolio rendered.');
    }
    render() {
        return (
            <div>
                <h2>Portfolio Items here, please.</h2>
                <PortfolioItem />
            </div>
        );
    }
}
