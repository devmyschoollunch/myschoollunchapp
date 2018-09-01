import React, { Component } from "react";
// import Pricing from "../parts/pricing";
// import About from "../pages/about";
// import Terms from "../pages/terms";
// import Checkout from "../parts/checkout";
// import Register from "../auth/register";
// import Counters from "../Demo/counters";
import PublicLogin from "../public/login";

class Body extends Component {
  render() {
    return (
      <div>
      {/* <Counters /> */}
        {/* <Register /> */}
        <PublicLogin />
        {/* <Pricing />
        <About />
        <Checkout />
        <Terms /> */}
      </div>
    );
  }
}

export default Body;
