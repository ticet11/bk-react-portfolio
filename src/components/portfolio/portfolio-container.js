import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio. Do you love it?",
            isLoading: false,
            data: [
                {
                    title: "Brian",
                    url: "https://briankozub.com",
                    category: "self",
                    slug: "brian",
                },
                {
                    title: "Daisy",
                    url: "https://daisykozub.com",
                    category: "daughter",
                    slug: "daisy",
                },
                {
                    title: "Sage",
                    url: "https://sagekozub.com",
                    category: "wife",
                    slug: "sage",
                },
            ],
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems() {
        return this.state.data.map((item) => (
            <PortfolioItem title={item.title} url={item.url} slug={item.slug} />
        ));
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter((item) => {
                return item.category === filter;
            }),
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("self")}>
                    Self
                </button>
                <button onClick={() => this.handleFilter("wife")}>
                    Wife
                </button>
                <button onClick={() => this.handleFilter("daughter")}>
                    Daughter
                </button>

                {this.portfolioItems()}
            </div>
        );
    }
}
