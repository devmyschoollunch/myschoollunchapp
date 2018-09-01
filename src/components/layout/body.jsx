import React, { Component } from "react";
import PagesHome from "../pages/home";
import PagesAbout from "../pages/about";
import PagesContactUs from "../pages/contactUs";
import PagesTerms from "../pages/terms";
import PagesProducts from "../pages/products";

class LayoutBody extends Component {
 
  render() {
    return (
      <div>
        <PagesHome />
        <PagesProducts />
        <PagesAbout />
        <PagesContactUs />
        <PagesTerms />
      </div>
    );
  }
}

export default LayoutBody;
