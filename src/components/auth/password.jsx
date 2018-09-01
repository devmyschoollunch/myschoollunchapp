import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Register from "./register";

class Login extends Component {
  constructor(props) {
    super(props);
    //this.state = {showComponent: false};

    this.state = { showingToggle: false };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  componentDidMount() {
    //  fetch data https://www.youtube.com/watch?v=b5zm5MeEx-o
    // myfunction();
    // alert("body");
  }

  validate(value) {
    // alert("yo");

    return false;
  }

  _onClick() {
    alert("clicked");
  }

  _onButtonClick() {
    //alert("_onButtonClick");

    this.setState({
      showComponent: true
    });
  }

  render() {
    const { showingToggle } = this.state;
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>password </h1>
          <p className="lead">
            This example is a quick exercise to illustrate how the bottom navbar
            works.
          </p>

          <div className="input-group input-group-lg">
            <div className="input-group-prepend" />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div>
            <button onClick={this._onButtonClick}>Show Component</button>
            {this.state.showComponent ? <Register /> : null}
          </div>
          <a
            onClick={this._onButtonClick}
            className="btn btn-lg btn-primary"
            role="button"
          >
            Register &raquo;
          </a>
          {/* {this.state.showComponent ? <Register /> : null} */}

          <div>
            <button
              onClick={() => this.setState({ showingToggle: !showingToggle })}
            >
              Toggle Component
            </button>
            <div style={{ display: showingToggle ? "block" : "none" }}>
              <Register />
            </div>
          </div>

          {/* <Router>
            <Link to={"/pages/about"}>Reg</Link>
          </Router> */}
        </div>

        {/* <Register /> */}
      </div>
    );
  }
}

export default Login;
