import React, { Component } from "react";

import PartsLogin from "../parts/login";


class PagesHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Home</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary btn-lg m-2">
                Login
              </a>
              </p>
              <p>
                
              <a href="#" className="btn btn-secondary btn-sm m-2">
                Register
              </a>
            </p>
          </div>
        </section>
        {/* <PartsLogin /> */}


      </div>
    );
  }
}

export default PagesHome;
