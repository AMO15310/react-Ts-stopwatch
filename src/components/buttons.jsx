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
    this.setState({
      seconds: this.state.seconds + 1,
    });
  };

  render() {
    return (
      <>
        <div className="time">
          <Timer data={this.state} />
          {/* <Timer data={this.state} /> */}
        </div>

        <div className="buttons">
          <button id="stop" className="badge badge-warning">
            Stop
          </button>
          <button
            id="start"
            onClick={() => this.startTimer()}
            className="badge badge-primary"
          >
            Start
          </button>
          <button id="reset" className="badge badge-secondary">
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default buttons;
