import './App.css';
import Clock from './components/Clock';
import React, { useState,useEffect } from "react";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer=()=> {
    const countDownDate = new Date("April 6, 2022").getTime();
    interval=setInterval(()=> {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance/(24*60*60*1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (60 * 60 * 1000) / (1000 * 60)));
      const seconds = Math.floor((distance % (60 * 1000) / (1000)));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  }

  useEffect(() => {
    startTimer();
  })

  return (
    <div className="App">
      <h1 className="font title">Time Until Eoin Can Flame Again!</h1>
      <div></div>
      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
    </div>
  );
}

export default App;
