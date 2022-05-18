import "./Pause.module.scss";
import useTimer from "easytimer-react-hook";
import play from "../Images/play.png";
import pauselogo from "../Images/pause.svg";
import { useEffect, useState } from "react";

function Pause() {
  const [timer, isTargetAchieved] = useTimer({});
  const [pause, setPause] = useState(false);

  timer.start({
    startValues: {
      minutes: 5,
    },
    countdown: true,
  });

  function togglePause() {
    setPause(() => !pause);
    console.log(pause);

    test();
  }
  function test() {
    if (pause === true) {
      timer.pause();
    } else if (pause === false) {
      timer.start();
    }
  }

  return (
    <section className="pause">
      <img
        className="pauselogo"
        onClick={togglePause}
        src={pause ? play : pauselogo}
        alt=""
      />
      <h1>{!pause ? "Pause and breath" : "Go"}</h1>
      <p>{timer?.getTimeValues().toString()}</p>
    </section>
  );
}

export default Pause;
