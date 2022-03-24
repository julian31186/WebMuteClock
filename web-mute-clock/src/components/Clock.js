import React from "react";
import { Fragment } from "react";
import './Clock.css';

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section className="margin"> 
              <p className="font bold">{timerDays}</p>
              <small className="font">Days</small>
            </section>
            
            <section className="margin">
              <p className="font bold">{timerHours}</p>
              <small className="font">Hours</small>
            </section>
            
            <section className="margin">
              <p className="font bold">{timerMinutes}</p>
              <small className="font">Minutes</small>
            </section>
            
            <section className="margin">
              <p className="font bold">{timerSeconds}</p>
              <small className="font">Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,

}

export default Clock;
