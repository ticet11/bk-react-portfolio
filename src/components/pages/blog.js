import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
            totalCount: 0,
            currentPage: 0,
            isOpen: false,
        };

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll, false);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(
            this
        );
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(blog) {
        axios
            .delete(
                `https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
                { withCredentials: true }
            )
            .then((response) => {
                this.setState({
                    data: this.state.data.filter(
                        (blogItem) => {
                            return blog.id !== blogItem.id;
                        }
                    ),
                });
                return response.data;
            })
            .catch((error) => {
                console.error("handle delete error", error);
            });
    }

    handleSuccessfulNewBlogSubmission(blog) {
        this.setState({
            isOpen: false,
            data: [blog].concat(this.state.data),
        });
    }

    handleModalClose() {
        this.setState({
            isOpen: false,
        });
    }

    handleNewBlogClick() {
        this.setState({
            isOpen: true,
        });
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

    UNSAFE_componentWillMount() {
        this.getBlogItems();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    render() {
        const blogRecords = this.state.data.map((blogItem) => {
            if (this.props.loggedInStatus === "LOGGED_IN") {
                return (
                    <div
                        key={blogItem.id}
                        className="admin-blog-wrapper"
                    >
                        <BlogItem blogItem={blogItem} />
                        <a
                            onClick={() =>
                                this.handleDeleteClick(blogItem)
                            }
                        >
                           <FontAwesomeIcon icon='trash' />
                        </a>
                    </div>
                );
            } else {
                return (
                    <BlogItem key={blogItem.id} blogItem={blogItem} />
                );
            }
        });

        return (
            <div className="blog-container">
                <BlogModal
                    isOpen={this.state.isOpen}
                    handleModalClose={this.handleModalClose}
                    handleSuccessfulNewBlogSubmission={
                        this.handleSuccessfulNewBlogSubmission
                    }
                />
                {this.props.loggedInStatus === "LOGGED_IN" ? (
                    <div className="new-blog-link">
                        <a onClick={this.handleNewBlogClick}>
                            <FontAwesomeIcon icon="edit" /> New Post
                        </a>
                    </div>
                ) : null}

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
