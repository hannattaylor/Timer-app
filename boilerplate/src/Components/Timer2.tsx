import useTimer from "easytimer-react-hook";
import * as React from "react";
import { useState } from "react";
import Analog from "../Pages/Analog";
import { Link } from "react-router-dom";
import * as styles from "./Header.module.scss";
import logoblack from "../Images/naviconblack.svg";
import logowhite from "../Images/naviconwhite.svg";
// import Digital from "../Pages/Digital";
// import Visuell from "../Pages/Visuell";

interface interfaceTimer {
  startValues: number;
  countdown: boolean;
  target: number;
}
export function Timer2() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(false);
  const [pause, setPause] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [selectPage, setSelectPage] = useState("analog");
  const [timer, isTargetAchieved] = useTimer({});

  let pauseFiveMin = () => setPause(() => !pause);
  let intervalTimer = () => setInterval(() => !interval);

  function add() {
    setCount((prev) => count + 1);
  }
  function sub() {
    if (count > 0) setCount((prev) => count - 1);
  }
  function startTimerFunction() {
    setStartTimer(() => true);
    timer.start({
      startValues:
        // [0, 2, 0, 0, 0],
        {
          minutes: count,
        },
      countdown: true,
    });
  }

  if (!timer.isRunning() && pause === true && startTimer === true) {
    setTimeout(startTimerFunction, 50000);
  }
  if (!timer.isRunning() && interval === true && startTimer === true) {
    setTimeout(startTimerFunction, 1000);
  }

  return (
    <section>
      <nav className={styles.nav}>
        <img
          src={toggleDropdown ? `${logowhite}` : `${logoblack}`}
          alt="picture of logo"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />

        {toggleDropdown ? (
          <section onClick={() => setToggleDropdown(false)}>
            <img
              src={logowhite}
              alt="picture of logo"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            <Link to="/analog" onClick={() => setSelectPage("analog")}>
              Analog timer
            </Link>
            <Link to="/digital" onClick={() => setSelectPage("digital")}>
              Digital timer
            </Link>
            <Link to="/visuell" onClick={() => setSelectPage("visuell")}>
              Visuell timer
            </Link>
          </section>
        ) : (
          <section></section>
        )}
      </nav>

      <section>
        <h1 onClick={add}>◀︎</h1>
        <h1> {count}</h1>
        <h1 onClick={sub}> ▶︎</h1>
      </section>
      <button onClick={startTimerFunction}>starta här</button>
      {startTimer && selectPage === "analog" ? (
        <Analog timeCounter={timer.getTimeValues()} />
      ) : null}
      {/* {startTimer && selectPage === "digital" ? (
        <Digital time={timer.getTimeValues().toString()} />
      ) : null}
      {startTimer && selectPage === "visuell" ? (
        <Visuell time={timer.getTimeValues().toString()} />
      ) : null} */}

      <form>
        <label htmlFor="fiveminbreak">5 min break</label>
        <input type="checkbox" onClick={pauseFiveMin} id="fiveminbreak"></input>
        <label htmlFor="interval">Interval</label>
        <input type="checkbox" id="interval" onClick={intervalTimer}></input>
      </form>

      <article
        id={startTimer ? "article" : ""}
        style={{ animation: `timglas linear ${count * 60}s` }}
      >
        test för att ändra bakgrundfärg med transition
      </article>
    </section>
  );
}
