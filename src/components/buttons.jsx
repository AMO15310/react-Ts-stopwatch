import React, { Component } from "react";
import Timer from "./timer";

class buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: this.props.data.hours,
      mins: this.props.data.mins,
      seconds: this.props.data.seconds,
    };
  }
  startTimer = () => {};
  stopTimer = () => {
    clearInterval();
  };

  stopTimer = () => {};

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      seconds: 0,
      mins: 0,
      hours: 0,
    });
  };
  render() {
    return (
      <>
        <div className="time">
          <Timer data={this.state} />
        </div>

        <div className="buttons">
          <button
            id="stop"
            onClick={() => this.stopTimer()}
            className="badge badge-pill badge-secondary"
          >
            Stop
          </button>
          <button
            id="start"
            onClick={() => this.startTimer()}
            className="badge badge-primary"
          >
            Start
          </button>
          <button
            onClick={() => this.resetTimer()}
            id="reset"
            className="badge badge-secondary"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default buttons;
