import React, { useState } from "react";
import "./timer.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Hrsfunc, Minsfunc, Secsfunc, resetSecFunc } from "../redux/Actions";
import { TimerState } from "../models/typeModels";

const Timer = (): JSX.Element => {
  const time = useSelector((state: TimerState) => state);
  const [stopped, setStopped] = useState(false);

  const dispatch = useDispatch();
  const TimerLogic = (time: TimerState) => {
    // setStopped(false);
    const timer = setInterval(() => {
      dispatch(Secsfunc());
      dispatch(resetSecFunc());
    }, 1000);
    // TimerStop(timer);
  };
  //   const TimerStop = () => {
  //     if (stopped) {
  //       //   clearInterval(timer);
  //       console.log("stopped");
  //     }
  //     TimerStop();
  //   };
  return (
    <React.Fragment>
      <div className="content">
        <div className="center-timer-component mx-auto my-auto flex-column">
          <div className="timer-main d-flex">
            <div className="hrs-component">{time.hrs}</div>
            <div className="mins-component">{time.mins}</div>
            <div className="secs-component">{time.secs}</div>
          </div>
          <div className="control-buttons">
            <button
              className="btn btn-primary"
              onClick={() => TimerLogic(time)}
            >
              Start
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setStopped(true)}
            >
              Stop
            </button>
            <button className="btn btn-danger">Reset</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Timer;
