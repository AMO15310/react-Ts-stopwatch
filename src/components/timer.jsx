import React, { Component } from "react";
import Buttons from "./butttons2";

class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secs: this.props.secs,
      mins: this.props.mins,
    };
  }

  render() {
    return (
      <>
        <div className="time">
          <p className="realtime" data={this.state}>
            {this.state.mins} : {this.state.secs}
          </p>
        </div>
      </>
    );
  }
}

export default timer;
