import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio. Do you love it?",
            isLoading: false,
            data: [],
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter((item) => {
                return item.category === filter;
            }),
        });
    }

    getPortfolioItems() {
        axios
            .get(
                "https://jordan.devcamp.space/portfolio/portfolio_items"
            )
            .then((response) => {
                this.setState({
                    data: response.data.portfolio_items,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    portfolioItems() {
        return this.state.data.map((item) => {
            return <PortfolioItem key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        this.getPortfolioItems();
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
