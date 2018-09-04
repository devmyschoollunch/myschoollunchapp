import React, { Component } from "react";
import $ from "jquery";

class PartsSignin extends Component {
  state = {
    email: "",
    password: ""
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _onClick = e => {
    e.preventDefault();

    var items = {
      email: this.state.email,
      password: this.state.password
    };

    var data = items;
    alert(JSON.stringify(items));
    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(data));
  };
  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input
            name="email"
            value={this.state.email}
            onChange={e => this._onChange(e)}
            type="text"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />

          <input
            name="password"
            value={this.state.password}
            onChange={e => this._onChange(e)}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={e => this._onClick(e)}
          >
            Sign in
          </button>
          <p />
          <a href="#" className="btn btn-secondary btn-sm m-2">
            New? Register >>
          </a>
        </form>
      </div>
    );
  }
}

export default PartsSignin;
