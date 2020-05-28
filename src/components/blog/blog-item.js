import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class BlogItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogItemClass: "",
        };
    }

    render() {
        const {
            id,
            blog_status,
            featured_image_url,
            title,
            content,
        } = this.props.item;
        return (
            <div className="blog-item-wrapper">
                <Link to={`/b/${id}`} >
                <h1>{title}</h1>
                </Link>
                <div>
                    <p>{content}</p>
                </div>
                <img
                    style={{ width: "200px" }}
                    src={featured_image_url}
                    alt=""
                />
            </div>
        );
    }
}
