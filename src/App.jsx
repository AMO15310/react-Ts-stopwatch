import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Timer from "./components/timer";
import Buttons from "./components/butttons2";

class myApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="comp">
          <p className="title">Stop Watch</p>
          <Buttons />
        </div>
      </>
    );
  }
}

export default myApp;
