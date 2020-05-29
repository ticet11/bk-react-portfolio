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
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll, false);
    }

    onScroll() {
        if (
            this.state.isLoading ||
            this.state.data.length === this.state.totalCount
        ) {
            return;
        }
        if (
            window.innerHeight +
                document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            this.getBlogItems();
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1,
        });
        axios
            .get(
                `https://brikozub.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                console.log("getting", response.data);
                this.setState({
                    data: this.state.data.concat(
                        response.data.portfolio_blogs
                    ),
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

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
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
