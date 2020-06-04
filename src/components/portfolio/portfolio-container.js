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
            filter: "",
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
            this.setState({
                filter: "",
            });
        } else {
            this.getPortfolioItems(filter);
            this.setState({
                filter: filter,
            });
        }
    }

    getPortfolioItems(filter = null) {
        axios
            .get(
                "https://brikozub.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc"
            )
            .then((response) => {
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(
                            (item) => {
                                return item.category === filter;
                            }
                        ),
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items,
                    });
                }
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
            <div className="homepage-wrapper">
                {this.state.filter === "" ? (
                    <div className="filter-links">
                        <button
                            className="btn"
                            onClick={() => this.handleFilter("HC")}
                        >
                            HTML and CSS 
                        </button>
                        <button
                            className="btn"
                            onClick={() =>
                                this.handleFilter("JavaScript")
                            }
                        >
                            JavaScript
                        </button>
                        <button
                            className="btn"
                            onClick={() => this.handleFilter("React")}
                        >
                            React.js
                        </button>
                    </div>
                ) : (
                    <div className="filter-links">
                        <button
                            className="btn"
                            onClick={() =>
                                this.handleFilter("CLEAR_FILTERS")
                            }
                        >
                            All
                        </button>
                    </div>
                )}
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}
