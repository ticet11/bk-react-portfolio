import React, { Component } from "react";
import Axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: "",
            content: "",
            featured_image: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(
            this
        );

        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(
            this
        );
    }

    componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post",
        };
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1,
        };
    }

    handleFeaturedImageDrop() {
        return {
            addedfile: (file) =>
                this.setState({ featured_image: file }),
        };
    }

    handleRichTextEditorChange(content) {
        this.setState({ content });
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append(
            "portfolio_blog[blog_status]",
            this.state.blog_status
        );
        formData.append(
            "portfolio_blog[content]",
            this.state.content
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
                this.setState({
                    title: "",
                    blog_status: "",
                    content: "",
                });
                this.props.handleSuccessfulFormSubmission(
                    response.data.portfolio_blog
                );
            })
            .catch((error) => {
                console.error("handleSubmit Blog", error);
            });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="blog-form-wrapper"
            >
                <div className="two-column">
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
                </div>
                <div className="one-column">
                    <RichTextEditor
                        handleRichTextEditorChange={
                            this.handleRichTextEditorChange
                        }
                    />
                </div>

                <div className="image-uploaders">
                    <DropzoneComponent
                        config={this.componentConfig()}
                        djsConfig={this.djsConfig()}
                        eventHandlers={this.handleFeaturedImageDrop()}
                    >
                        <div className="dz-message">
                            Featured Image
                        </div>
                    </DropzoneComponent>
                </div>

                <button className="btn">save</button>
            </form>
        );
    }
}
