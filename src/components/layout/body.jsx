import React, { Component } from "react";
import PagesHome from "../pages/home";
import PagesAbout from "../pages/about";
import PagesContactUs from "../pages/contactUs";
import PagesTerms from "../pages/terms";
import PagesProducts from "../pages/products";

class LayoutBody extends Component {
 
  render() {
    return (
      <div className="container-fluid">
        <PagesHome />
        <h1> </h1>
        <PagesProducts />
        <h1> </h1>
        <PagesAbout />
        <h1> </h1>
        <PagesContactUs />
        <hr></hr>
        <PagesTerms />
      </div>
    );
  }
}

export default LayoutBody;
