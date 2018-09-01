import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== thist.props.value) {
      // ajax call, get more data
    }
  }
  render() {
    return (
      <div className="container">
        {/* <Header /> */}
        <Body />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
