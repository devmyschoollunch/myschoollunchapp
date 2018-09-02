import React, { Component } from "react";
import $ from "jquery";
import CommonBuildParams from "../../scripts/JSmain";
import PartsCommonUSStates from "../parts/common/usStates";

class PartsRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const s = this.state;
    e.preventDefault();
    // if (s.firstName === null) {
    //   return;
    // }

    var items = {
      fm: s.firstName
    };

    var data = CommonBuildParams(items);

    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(data));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit} className="btn btn-lg btn-primary">
          New? Register &raquo;
        </button>

        {/* <div className="py-5 text-center">
          <h2>Register</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div> */}

        <div className="row">
          <div className="col-md-8 order-md-1">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                  type="text"
                  maxlength="100"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Last name"
                  type="text"
                  maxlength="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="input-group">
                <input
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  type="text"
                  maxlength="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                maxlength="100"
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Address"
                type="text"
                maxlength="50"
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                placeholder="P.O. Box/Apt #"
                type="text"
                maxlength="50"
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <PartsCommonUSStates />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <input
                  className="form-control"
                  placeholder="Zip code"
                  type="text"
                  maxlength="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleChange(event) {
    let e = event.target;
    this.setState({ firstName: e.value });
    this.setState({ lastName: e.value });
  }
}

export default PartsRegister;
