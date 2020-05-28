import React, { Component } from "react";
import Axios from "axios";

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
        };
    }

    getBlogItem() {
        Axios.get(
            `https://brikozub.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
        )
            .then((response) => {
                this.setState({
                    blogItem: response.data.portfolio_blog
                  });
            })
            .catch((error) => {
                console.error("getBlogItem error", error);
            });
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status,
        } = this.state.blogItem;
        return (
            <div>
                <h1>{title}</h1>
                <img src={featured_image_url} alt=""/>
                <div>{content}</div>
            </div>
        );
    }
}
