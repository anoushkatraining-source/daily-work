import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false,
    };
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();

    const { username, email, password } = this.state;

    console.log("SENDING DATA:", { username, email, password });

    AuthService.register(username, email, password).then(
      (response) => {
        console.log("SUCCESS:", response.data);
        this.setState({
          message: "Registration successful!",
          successful: true,
        });
      },
      (error) => {
        console.log("ERROR:", error.response);
        this.setState({
          message: "Registration failed",
          successful: false,
        });
      }
    );
  };

  render() {
    return (
      <div className="container mt-4">
        <h3>Sign Up</h3>

        <form onSubmit={this.handleRegister}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />

          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />

          <button className="btn btn-success">Register</button>
        </form>

        {this.state.message && (
          <p className="mt-2 text-danger">{this.state.message}</p>
        )}
      </div>
    );
  }
}