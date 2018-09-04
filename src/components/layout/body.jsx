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
        <hr></hr>
        <PagesAbout />
        <hr></hr>
        <PagesProducts />
        <hr></hr>
        <PagesContactUs />
        <hr></hr>
        <PagesTerms />
      </div>
    );
  }
}

export default LayoutBody;
