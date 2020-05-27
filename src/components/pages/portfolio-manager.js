import React, { Component } from "react";
import axios from "axios";

import PorfolioForm from "../portfolio/portfolio-form";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PorfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            itemToEdit: {},
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
            this
        );
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(
            this
        );

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(portfolioItem) {
        this.setState({
            itemToEdit: portfolioItem,
        });
    }

    handleDeleteClick(portfolioItem) {
        axios
            .delete(
                `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.setState({
                    data: this.state.data.filter((item) => {
                        return item.id !== portfolioItem.id;
                    }),
                });
                return response.data;
            })
            .catch((error) => {
                console.error("delete error", error);
            });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            data: [portfolioItem].concat(this.state.data),
        });
    }

    handleFormSubmissionError(error) {
        console.error("Form submission error", error);
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
                console.error(error);
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
                    <PortfolioSidebarList
                        data={this.state.data}
                        handleDeleteClick={this.handleDeleteClick}
                        handleEditClick={this.handleEditClick}
                    />
                </div>
            </div>
        );
    }
}
