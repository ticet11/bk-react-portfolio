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
                "https://brikozub.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
            )
            .then((response) => {
                this.setState({
                    data: response.data.portfolio_items,
                });
            })
            .catch((error) => {
                console.error(error);
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
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="portfolio-items-wrapper">
                <button
                    className="btn"
                    onClick={() => this.handleFilter("eCommerce")}
                >
                    ecommerce
                </button>
                <button
                    className="btn"
                    onClick={() => this.handleFilter("Scheduling")}
                >
                    Social Media
                </button>
                <button
                    className="btn"
                    onClick={() => this.handleFilter("Enterprise")}
                >
                    Events
                </button>
                {this.portfolioItems()}
            </div>
        );
    }
}
