import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { withRouter } from "../common/with-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    console.log("LOGIN DATA:", this.state);

    AuthService.login(this.state.username, this.state.password).then(
      (data) => {
        console.log("LOGIN SUCCESS:", data);
        this.props.router.navigate("/order");
      },
      (error) => {
        console.log("LOGIN ERROR:", error.response);
        this.setState({
          message: "Invalid username or password",
        });
      }
    );
  };

  render() {
    return (
      <div className="container mt-4">
        <h3>Sign In</h3>

        <form onSubmit={this.handleLogin}>
          <input
            className="form-control mb-2"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />

          <button className="btn btn-primary">Login</button>
        </form>

        {this.state.message && (
          <p className="text-danger mt-2">{this.state.message}</p>
        )}
      </div>
    );
  }
}

export default withRouter(Login);