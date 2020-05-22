import React, { Component } from "react";

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log('handle change', event)
    }
    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type='submit' >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
