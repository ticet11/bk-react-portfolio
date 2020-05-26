import React, { Component } from "react";
import axios from "axios";

import PorfolioForm from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PorfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
            this
        );
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(
            this
        );
    }

    handleSuccessfulFormSubmission(portfolioItem) {
    
        this.setState({
            data: [portfolioItem].concat(
                this.state.data
            ),
        });
    }

    handleFormSubmissionError(error) {
        console.log("Form submission error", error);
    }

    getPortfolioItems() {
        axios
            .get(
                "https://brikozub.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
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

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PorfolioForm
                        handleSuccessfulFormSubmission={
                            this.handleSuccessfulFormSubmission
                        }
                        handleFormSubmissionError={
                            this.handleFormSubmissionError
                        }
                    />
                </div>
                <div className="right-column">
                    <PortfolioSidebarList data={this.state.data} />
                </div>
            </div>
        );
    }
}
