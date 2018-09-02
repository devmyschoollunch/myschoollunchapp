import React, { Component } from "react";
import $ from "jquery";
import CommonBuildParams from "../../scripts/main";

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

    var param = CommonBuildParams(items);
    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(param));
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
                  placeholder=""
                  required=""
                  type="text"
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required=""
                  type="text"
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <input
                  className="form-control"
                  id="username"
                  placeholder=""
                  required=""
                  type="text"
                />
                <div className="invalid-feedback" styleName="width: 100%;">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                placeholder=""
                type="email"
              />
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                className="form-control"
                id="address"
                placeholder=""
                required=""
                type="text"
              />
              <div className="invalid-feedback">Please enter your address.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                className="form-control"
                id="address2"
                placeholder=""
                type="text"
              />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  required=""
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required=""
                  type="text"
                />
                <div className="invalid-feedback">Zip code required.</div>
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
