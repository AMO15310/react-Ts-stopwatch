import React, { useState, useEffect } from "react";
import Timer from "./timer";

function TimerFunc() {
  //   console.log(props);

  const [counter, setTime] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((counter) => counter + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    if (counter == 60) {
      setCounter2((counter2) => counter2 + 1);
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <div className="time">
        <Timer secs={counter} mins={counter2} />
      </div>

      <div className="buttons">
        <button
          id="stop"
          onClick={setRunning(false)}
          className="badge badge-pill badge-secondary"
        >
          Stop
        </button>
        <button
          id="start"
          onClick={setRunning(true)}
          className="badge badge-primary"
        >
          Start
        </button>
        <button
          onClick={setTime(0)}
          id="reset"
          className="badge badge-secondary"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default TimerFunc;
