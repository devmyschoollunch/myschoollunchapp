import React, { Component } from "react";
import $ from "jquery";
import CommonBuildParams from "../../scripts/JSmain";
import PartsCommonUSStates from "../parts/common/usStates";

class PartsRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: null,
      Lastname: null,
      Username: null,
      Email: null,
      Address: null,
      Address2: null,
      USState: null,
      Zipcode: null
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
      Firstname: s.Firstname,
      Lastname: s.Lastname,
      Username: s.Username,
      Email: s.Email,
      Address: s.Address,
      Address2: s.Address2,
      USState: s.USState,
      Zipcode: s.Zipcode
    };

    alert(s.Zipcode);

    return;

    var data = CommonBuildParams(items);

    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(data));
  }

  render() {
    return (
      <div>
        <div className="py-5 text-center">
          <h2>Register</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 order-md-1">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
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
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Username"
                  type="text"
                  maxlength="100"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Email"
                type="email"
                maxlength="100"
              />
            </div>

            <div className="mb-3">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Address"
                type="text"
                maxlength="50"
              />
            </div>

            <div className="mb-3">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                placeholder="P.O. Box / Apt #"
                type="text"
                maxlength="50"
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <PartsCommonUSStates
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Zip code"
                  type="text"
                  maxlength="50"
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.handleSubmit} className="btn btn-lg btn-primary">
          Register
        </button>
      </div>
    );
  }

  handleChange(event) {
    let e = event.target;
    this.setState({
      Firstname: e.value,
      Firstname: e.value,
      Lastname: e.value,
      Username: e.value,
      Email: e.value,
      Address: e.value,
      Address2: e.value,
      USState: e.value,
      Zipcode: e.value
    });
  }
}

export default PartsRegister;
