import React, { Component } from "react";
import { Button, Form, Jumbotron, Container } from "react-bootstrap";

import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // submit form logic here
    }

    render() {
        return (
            <div className="Login" style="height:100vh;width=100vw">
                <Jumbotron fluid>
                    <Container>
                        <form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email" bsSize="large">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="password" bsSize="large">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </Form.Group>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >Login</Button>
                        </form>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}