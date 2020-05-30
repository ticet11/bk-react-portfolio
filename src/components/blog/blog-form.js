import React, { Component } from "react";
import Axios from "axios";

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append(
            "portfolio_blog[blog_status]",
            this.state.blog_status
        );

        return formData;
    }

    handleSubmit(event) {
        Axios.post(
            "https://brikozub.devcamp.space/portfolio/portfolio_blogs",
            this.buildForm(),
            { withCredentials: true }
        )
            .then((response) => {
                this.props.handleSuccessfulFormSubmission(
                    response.data
                );
            })
            .catch((error) => {
                console.error("handleSubmit Blog", error);
            });

        this.props.handleSuccessfulFormSubmission(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="blog_status"
                    placeholder="Draft/Published"
                    value={this.state.blog_status}
                    onChange={this.handleChange}
                />
                {/* <input type="text" />
                <input type="text" /> */}

                <button>save</button>
            </form>
        );
    }
}
