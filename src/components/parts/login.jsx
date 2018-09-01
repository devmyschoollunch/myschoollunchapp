import React, { Component } from "react";
class PartsLogin extends Component {
  state = {};
  render() {
    return (
      
      <div className="container">
     

      <div className="jumbotron mt-3">
        <h1>Login</h1>
        <p className="lead">
          This example is a quick exercise to illustrate how the bottom navbar
          works.
        </p>

        <div className="input-group input-group-lg">
          <div className="input-group-prepend" />
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>

        {/* <div>
          <button onClick={this._onButtonClick}>Show Component</button>
          {this.state.showComponent ? <Register /> : null}
        </div> */}
        <button
          onClick={this._onButtonClick}
          className="btn btn-lg btn-primary"
          type="button"
        >
          New? Register &raquo;
        </button>
        {/* {this.state.showComponent ? <Register /> : null} */}
 
      </div>
    </div>


    );
  }
}

export default PartsLogin;
