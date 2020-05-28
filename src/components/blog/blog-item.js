import React, { Component } from "react";

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
            featured_image_url,
            title,
            content,
        } = this.props.item;
        return (<div className="blog-item-wrapper">
            <h1>{title}</h1>
            <img style={{width: '200px'}} src={featured_image_url} alt=""/>
            <p>{content}</p>
        </div>)
    }
}
