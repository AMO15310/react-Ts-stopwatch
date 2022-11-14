import React, { Component } from "react";
import Buttons from "./buttons";

class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      mins: 0,
      seconds: 0,
    };

    setInterval(() => {
      this.setState({
        hours: this.props.data.hours,
        //   hours: 5,
        mins: this.props.data.mins,
        seconds: this.props.data.seconds,
      });
    });
  }

  render() {
    return (
      <>
        <div className="time">
          <p className="realtime" data={this.state}>
            {this.state.hours} : {this.state.mins} : {this.state.seconds}
          </p>
        </div>
      </>
    );
  }
}

export default timer;
