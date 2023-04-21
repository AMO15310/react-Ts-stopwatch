import React from 'react';
import "./timer.css"

const Timer = ():JSX.Element => {
    return (
        <React.Fragment>
            <div className="content">
                <div className="center-timer-component mx-auto my-auto flex-column">
                    <div className="timer-main d-flex">
                    <div className="hrs-component">00</div>
                    <div className="mins-component">00</div>
                    <div className="secs-component">00</div>
                    </div>
                    <div className="control-buttons">
                        <button className='btn btn-primary'>Start</button>
                        <button className='btn btn-warning'>Stop</button>
                        <button className='btn btn-danger'>Reset</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Timer;
