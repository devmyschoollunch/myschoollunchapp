import React, { Component } from "react";
import Pricing from "../parts/pricing";
import Login from "../auth/login";
import About from "../pages/about";
import Terms from "../pages/terms";
import Checkout from "../parts/checkout";
import Register from "../auth/register";
import Counters from "../Demo/counters";

class Body extends Component {
  render() {
    return (
      <div>
      {/* <Counters /> */}
        {/* <Register /> */}
        <Login />
        {/* <Pricing />
        <About />
        <Checkout />
        <Terms /> */}
      </div>
    );
  }
}

export default Body;
