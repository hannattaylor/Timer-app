import useTimer from "easytimer-react-hook";
import * as React from "react";
import { useState } from "react";
import Analog from "../Pages/Analog";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../Images/naviconblack.svg";

// type Props = {
//   time: string;
// };

export function Timer2() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
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
      startValues: {
        minutes: count,
      },
      countdown: true,
    });
  }

  interface interfaceTimer {
    startValues: number;
    countdown: true;
  }

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

  return (
    <section>
      <nav className={styles.section}>
        <img
          className={styles.img}
          src={logo}
          alt="picture of logo"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />

        {toggleDropdown ? (
          <section onClick={() => setToggleDropdown(false)}>
            <Link to="/analog">Analog timer</Link>
            <Link to="/digital">Digital timer</Link>
            <Link to="/visuell">Visuell timer</Link>
          </section>
        ) : (
          <section></section>
        )}
      </nav>

      <section>
        <h1 onClick={add}>◀︎</h1>
        hej
        <h1> {count}</h1>
        <h1 onClick={sub}> ▶︎</h1>
      </section>
      {startTimer ? <div>{timer.getTimeValues().toString()}</div> : null}
      <button onClick={startTimerFunction}>starta här</button>
      <Analog time={timer.getTimeValues().toString()} />

      <button onClick={pauseTimer}> pausa här</button>
      <button onClick={stopTimer}> stoppa här</button>
      <form>
        <input type="checkbox" onClick={pauseFiveMin}></input>
      </form>
    </section>
  );
}
