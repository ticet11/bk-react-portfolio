import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio. Do you love it?",
            data: [
                { title: "Brian", url: "https://briankozub.com" },
                { title: "Daisy", url: "https://daisykozub.com" },
                { title: "Sage", url: "https://sagekozub.com" },
            ],
        };
    }

    portfolioItems() {
        return this.state.data.map((item) => (
            <PortfolioItem title={item.title} url={item.url} />
        ));
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}
