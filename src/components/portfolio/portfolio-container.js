import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio Items here, please.</h2>
                <PortfolioItem />
            </div>
        );
    }
}
