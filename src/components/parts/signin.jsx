import React, { Component } from "react";
import $ from "jquery";

class PartsSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: null,
      Password: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const s = this.state;
    e.preventDefault();

    var items = {
      Email: this.state.Email,
      Password: this.state.Password
    };

    alert(JSON.stringify(items));
    var data = items;
    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(data));
  }

  handleChange(event) {
    let e = event.target;
    this.setState({
      Email: e.value,
      Password: e.value
    });
  }

  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />

          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.handleSubmit}
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
