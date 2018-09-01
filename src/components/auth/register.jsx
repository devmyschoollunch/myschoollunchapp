import React, { Component } from "react";
import Link from "react-router-dom";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="form-group">
            <label for="firstname">First name</label>
            <input
              id="firstname"
              type="text"
              className="form-control"
              placeholder="Enter first name"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              maxlength="100"
            />
          </div>

          <div className="form-group">
            <label for="Lastname">Last name</label>
            <input
              id="Lastname"
              type="text"
              className="form-control"
              placeholder="Enter last name"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              maxlength="100"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              maxlength="100"
            />
            <small id="emailHelp" className="form-text text-muted">
              We will never share your email with anyone else.
            </small>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              {" "}
              I agree all statements in{" "}
              <a href="" className="aaaa">
                terms of service
              </a>
              .
            </label>
          </div>

          <div className="form-group">
            <button type="button" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
