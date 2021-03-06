import useTimer from "easytimer-react-hook";
import { useState, useEffect } from "react";
import Analog from "../Pages/Analog";
import "./Timer.module.scss";
import logoblack from "../Images/naviconblack.svg";
import logowhite from "../Images/naviconwhite.svg";
import Digital from "../Pages/Digital";
import Visuell from "../Pages/Visuell";
import Pause from "./Pause";

export function Timer() {
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
    setCount(() => count + 1);
  }
  function sub() {
    if (count > 0) setCount(() => count - 1);
  }

  //Tar bort setTimer sektionen när timern är true/startad och vise versa
  useEffect(() => {
    if (startTimer) {
      const section = document.getElementById("timerSection")!;
      section.style.display = "none";
    } else if (!startTimer) {
      const section = document.getElementById("timerSection")!;
      section.style.display = "flex";
    }
  }, [startTimer]);

  function startTimerFunction() {
    setStartTimer(() => true);
    timer.start({
      startValues: {
        minutes: count,
      },
      countdown: true,
    });
  }

  function abortTimer() {
    timer.stop();
    setStartTimer(() => false);
    setCount(0);
  }

  if (
    (!timer.isRunning() && pause && startTimer) ||
    (!timer.isRunning() && pause && interval === true && startTimer)
  ) {
    setTimeout(startTimerFunction, 50000);
  }
  if (
    !timer.isRunning() &&
    interval === true &&
    !pause &&
    startTimer === true
  ) {
    setTimeout(startTimerFunction, 1000);
  }

  return (
    <section>
      <nav className="nav">
        <img
          src={
            toggleDropdown || (selectPage === "visuell" && startTimer === true)
              ? `${logowhite}`
              : `${logoblack}`
          }
          alt="picture of logo"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        />

        {toggleDropdown ? (
          <section onClick={() => setToggleDropdown(false)}>
            <h4 onClick={() => setSelectPage("analog")}>ANALOG TIMER</h4>
            <h4 onClick={() => setSelectPage("digital")}>DIGITAL TIMER</h4>
            <h4 onClick={() => setSelectPage("visuell")}>VISUELL TIMER</h4>
          </section>
        ) : null}
      </nav>

      <section id="timerSection" className="timerSection">
        <section className="setTimerSection">
          <h1 className="leftright" onClick={sub}>
            ◀︎
          </h1>
          <section>
            <h1 className="count"> {count}</h1>
            <h2 className="minSub"> minutes</h2>
          </section>
          <h1 className="leftright" onClick={add}>
            ▶︎
          </h1>
        </section>

        <form>
          <article>
            <label htmlFor="fiveminbreak">5 min break / interval</label>
            <input
              type="checkbox"
              onClick={pauseFiveMin}
              id="fiveminbreak"
            ></input>
          </article>
          <article>
            <label htmlFor="interval">interval</label>
            <input
              type="checkbox"
              id="interval"
              onClick={intervalTimer}
            ></input>
          </article>
        </form>
        <button onClick={startTimerFunction}>START TIMER</button>
      </section>

      {startTimer && selectPage === "analog" ? (
        <Analog
          interval={interval}
          timeCounter={timer.getTimeValues()}
          pauseState={pause}
        />
      ) : null}
      {startTimer && selectPage === "digital" ? (
        <Digital
          timeCounter={timer.getTimeValues().toString(["minutes", "seconds"])}
          pauseState={pause}
          interval={interval}
          time={timer.getTimeValues()}
        />
      ) : null}
      {startTimer && selectPage === "visuell" ? (
        <Visuell
          interval={interval}
          time={timer.getTimeValues()}
          pauseState={pause}
        />
      ) : null}

      {(pause &&
        startTimer &&
        timer.getTimeValues().seconds === 0 &&
        timer.getTimeValues().minutes < 1) ||
      (pause &&
        interval &&
        startTimer &&
        timer.getTimeValues().seconds === 0 &&
        timer.getTimeValues().minutes < 1) ? (
        <section>
          <Pause pauseState={pause} />
          <button className="goOn" onClick={() => startTimerFunction()}>
            NO PAUSE, GO NOW!
          </button>
        </section>
      ) : null}

      {(startTimer && pause) || (startTimer && interval) || startTimer ? (
        <button className="abort" onClick={abortTimer}>
          ABORT TIMER
        </button>
      ) : null}

      {startTimer === true &&
      pause === false &&
      interval === false &&
      timer.getTimeValues().seconds === 0 &&
      timer.getTimeValues().minutes < 1 ? (
        <button className="setNew" onClick={abortTimer}>
          SET NEW TIMER
        </button>
      ) : null}
    </section>
  );
}
