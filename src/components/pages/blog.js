import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            data: [],
        };

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems() {
        axios
            .get(
                "https://brikozub.devcamp.space/portfolio/portfolio_blogs",
                {
                    withCredentials: true,
                }                  
            )
            .then((response) => {
                this.setState({
                    data: response.data.portfolio_blogs,
                });
            })
            .catch((error) => {
                console.error("get blog error", error);
            });
    }

    blogItems() {
        return this.state.data.map((item) => {
            
        });
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        return (
            <div>
                <h1>Blog</h1>
                <div>
                    <Link to="/about">More info about me!</Link>
                    {this.blogItems()}
                </div>
            </div>
        );
    }
}
