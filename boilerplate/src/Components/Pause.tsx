import "./Pause.module.scss";
import useTimer from "easytimer-react-hook";
import play from "../Images/play.png";
import pauselogo from "../Images/pause.svg";
import { useEffect, useState } from "react";

function Pause() {
  const [timer, isTargetAchieved] = useTimer({});
  const [pause, setPause] = useState(false);

  //Starta timer-funktionen vid första rendering av komponent
  useEffect(() => {
    timer.start({
      startValues: {
        minutes: 5,
      },
      countdown: true,
    });
  }, []);

  //Pausa/starta paus-timern
  useEffect(() => {
    if (pause) {
      timer.pause();
    }
    if (!pause) {
      timer.start();
    }
  }, [pause]);

  return (
    <section className="pause">
      <img
        className="pauselogo"
        onClick={() => setPause(!pause)}
        src={pause ? play : pauselogo}
        alt=""
      />
      <h1>{!pause ? "Pause and breath" : "Go"}</h1>
      <p>{timer?.getTimeValues().toString()}</p>
    </section>
  );
}

export default Pause;
