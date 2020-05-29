import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from "../blog/blog-item";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
            totalCount: 0,
            currentPage: 0,
        };

        this.getBlogItems = this.getBlogItems.bind(this);
        this.activateInfiniteScroll();
    }

    activateInfiniteScroll() {
        window.onscroll = () => {
            if (
                window.innerHeight +
                    document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                console.log("get them posts");
            }
        };
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1,
        });
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
                    totalCount: response.data.meta.total_records,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error("get blog error", error);
            });
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.data.map((blogItem) => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        });

        return (
            <div className="blog-container">
                <div className="content-container">{blogRecords}</div>

                {this.state.isLoading ? (
                    <div className="content-loader">
                        <FontAwesomeIcon icon="yin-yang" spin />
                        Loading...
                    </div>
                ) : null}
            </div>
        );
    }
}
