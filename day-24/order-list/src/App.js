import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import OrderForm from "./components/order-form.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({ currentUser: user });
    }
  }

  logOut = () => {
    AuthService.logout();
    this.setState({ currentUser: undefined });
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark px-3">
          <Link to="/" className="navbar-brand">
            MyApp
          </Link>

          <div className="ms-auto">
            {currentUser ? (
              <>
                <Link to="/order" className="btn btn-outline-light me-2">
                  Order
                </Link>
                <Link to="/profile" className="btn btn-outline-light me-2">
                  {currentUser.username}
                </Link>
                <button onClick={this.logOut} className="btn btn-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light me-2">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-success">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<OrderForm />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;