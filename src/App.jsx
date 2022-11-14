import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Timer from "./components/timer";
import Buttons from "./components/buttons";

class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mins: 0,
      hours: 0,
      seconds: 0,
    };
  }
  render() {
    return (
      <>
        <div className="comp">
          <p className="title">Stop Watch</p>
          <Buttons data={this.state} />
        </div>
      </>
    );
  }
}

export default myApp;
