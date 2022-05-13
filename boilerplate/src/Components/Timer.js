import useTimer from "easytimer-react-hook";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Analog from "../Pages/Analog";

export function Timer() {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [timer, isTargetAchieved] = useTimer({});

  function add() {
    setCount((prev) => count + 1);
  }
  function sub() {
    if (count > 0) setCount((prev) => count - 1);
  }
  function startTimerFunction() {
    setStartTimer(() => true);
    timer.start({
      startValues: [0, 5, 0, 0, 0],
      // startValues: {
      //   minutes: count,
      // },
      countdown: true,
    });
  }

  // interface interfaceTimer {
  //   startValues: number;
  // }

  let pauseTimer = () => timer.pause();
  let stopTimer = () => timer.stop();

  function pauseFiveMin() {
    setInterval(() => !interval);
  }

  // useEffect(() => {
  if (!timer.isRunning() && interval === true) {
    console.log("hej");
    timer.start({
      startValues: [0, 3, 0, 0, 0],
      countdown: true,
    });

    if (!timer.isRunning()) {
      startTimerFunction();
      console.log("starta på nyy");
    }
    setInterval(() => !interval);
  }
  // }, [startTimer]);
  console.log(interval);

  return (
    <section>
      <section>
        <h1 onClick={add}>◀︎</h1>
        <h1> {count}</h1>
        <h1 onClick={sub}> ▶︎</h1>
      </section>
      {startTimer ? <div>{timer.getTimeValues().toString()}</div> : null}
      <button onClick={startTimerFunction}>starta här</button>
      <Analog />

      <button onClick={pauseTimer}> pausa här</button>
      <button onClick={stopTimer}> stoppa här</button>
      <form>
        <input type="checkbox" onClick={pauseFiveMin}></input>
      </form>
    </section>
  );
}
