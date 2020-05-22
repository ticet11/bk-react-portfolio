import React, { Component } from "react";
import axios from "axios";

export default class PorfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    getPortfolioItems() {
        axios
            .get(
                "https://brikozub.devcamp.space/portfolio/portfolio_items",
                { withCredentials: true }
            )
            .then((response) => {
                this.setState({
                    data: [...response.data.portfolio_items],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    portfolioItems() {
        return this.state.data.map((item) => {
            return <div>{item.name}</div>;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <form action="">
                        <input
                            type="text"
                            placeholder="Portfolio Form"
                        />
                    </form>
                </div>
                <div className="right-column">
                    <p>Portfolio Sidebar</p>
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}
