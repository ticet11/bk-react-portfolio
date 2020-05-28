import React, { Component } from "react";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
    const {
        id,
        blog_status,
        featured_image_url,
        title,
        content,
    } = props.blogItem;
    return (
        <div className="blog-item-wrapper">
            <Link to={`/b/${id}`}>
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
};

export default BlogItem;
