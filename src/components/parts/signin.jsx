import React, { Component } from "react";
import $ from "jquery";
import PartsRegister from "../parts/register";

class PartsSignin extends Component {
  constructor(props) {
    super(props);
    //this.state = {showComponent: false};

    this.state = { showingToggle: false };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  state = {
    email: "",
    password: ""
  };
  _onButtonClick(e) {
    e.preventDefault();

    this.setState({
      showComponent: true
    });
  }

  _onClick = e => {
    e.preventDefault();
    const s = this.state;

    var items = {
      email: s.email,
      password: s.password
    };

    var data = JSON.stringify(items);
    //alert(data)
    $.post("http://localhost:60769/Home/About?data=" + data);
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { showingToggle } = this.state;
    return (
      <div>
        <div className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <div className="mb-3">
            {" "}
            <input
              name="email"
              value={this.state.email}
              onChange={e => this._onChange(e)}
              type="email"
              className="form-control m20"
              placeholder="Email address"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              value={this.state.password}
              onChange={e => this._onChange(e)}
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={e => this._onClick(e)}
          >
            Sign in
          </button>
          <br />
          <button
            className="btn btn-secondary btn-sm"
            onClick={this._onButtonClick}
          >
            New? Register &raquo;
          </button>
          {this.state.showComponent ? <PartsRegister /> : null}
        </div>
      </div>
    );
  }
}

export default PartsSignin;
