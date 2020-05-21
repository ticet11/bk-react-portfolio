import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        axios
            .post(
                "https://api.devcamp.space/sessions",
                {
                    client: {
                        email: this.state.email,
                        password: this.state.password,
                    },
                },
                { withCredentials: true }
            )
            .then((response) => {
                if (response.data.status === "created") {
                    console.log("You did it!");
                } else {
                    this.setState({
                        errorText: "Wrong email or password",
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    errorText: "An error!",
                });
            });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            errorText: "",
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>Log in here, me.</h1>
                <div className="errorText">
                    {this.state.errorText}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="e-mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}