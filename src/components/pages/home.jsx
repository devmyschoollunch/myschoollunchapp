import React, { Component } from "react";

import PartsSignin from "../parts/signin";
import PartsRegister from "../parts/register";

class PagesHome extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        {/* <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Home</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </p>
          </div>
        </section> */}
        <PartsSignin />
        <PartsRegister />
      </div>
    );
  }
}

export default PagesHome;
