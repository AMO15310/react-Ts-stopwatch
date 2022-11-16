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
  startTimer = () => {
    const start = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
      if (this.state.seconds == 60) {
        this.state.mins = this.state.mins + 1;
        this.setState({
          seconds: 0,
        });
      }
      if (this.state.mins == 60) {
        this.state.hours = this.state.mins;
        this.setState({
          mins: 0,
        });
      }
    }, 100);
    console.log(this.state.mins);
    this.stopTimer = () => {
      return clearInterval(start);
    };
  };
  stopTimer = () => {
    clearInterval();
  };

  stopTimer = () => {
    clearInterval(this.startTimer);
  };

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
