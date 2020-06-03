import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    this.props.handleSuccessfulAuth();
                } else {
                    this.setState({
                        errorText: "Wrong email or password",
                    });
                    this.props.handleUnsuccessfulAuth();
                }
            })
            .catch((error) => {
                this.setState({
                    errorText: "An error!",
                });
                this.props.handleUnsuccessfulAuth();
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
                <form
                    className="auth-form-wrapper"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <FontAwesomeIcon icon="paper-plane" />
                        <input
                            type="email"
                            name="email"
                            placeholder="e-mail"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon='lock' />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </div>
                    
                        <button className='btn' type="submit">Login</button>
                
                </form>
            </div>
        );
    }
}
