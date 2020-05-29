import React, { Component } from "react";
import axios from "axios";

import BlogItem from "../blog/blog-item";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            data: [],
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
            </div>
        );
    }
}
