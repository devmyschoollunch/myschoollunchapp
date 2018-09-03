import React, { Component } from "react";
import $ from "jquery";
import CommonBuildParams from "../../scripts/JSmain";

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

    var data = CommonBuildParams(items);
    $.post("http://localhost:60769/Home/About?data=" + JSON.stringify(data));
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
                  maxLength="100"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Last name"
                  type="text"
                  maxLength="100"
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
                  maxLength="100"
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
                maxLength="100"
              />
            </div>

            <div className="mb-3">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Address"
                type="text"
                maxLength="50"
              />
            </div>

            <div className="mb-3">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control"
                placeholder="P.O. Box / Apt #"
                type="text"
                maxLength="50"
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                {/* <PartsCommonUSStates
                  onSelectedIndex={this._handleSelectedIndex}
                  value={this.state.value}
                  onChange={this.handleChange}
                /> */}
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="custom-select mr-sm-2"
                >
                  <option value="">Pick a State...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Zip code"
                  type="text"
                  maxLength="50"
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
}

export default PartsRegister;
