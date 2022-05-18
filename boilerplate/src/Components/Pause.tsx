import "./Pause.module.scss";
import useTimer from "easytimer-react-hook";
import play from "../Images/play.png";
import pauselogo from "../Images/pause.svg";
import { useEffect, useState } from "react";

type Props = {
  pauseState: boolean;
};

function Pause({ pauseState }: Props) {
  const [timer, isTargetAchieved] = useTimer({});
  const [pause, setPause] = useState(pauseState);

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
      timer.start();
    }
    if (!pause) {
      timer.pause();
    }
  }, [pause]);

  function goOn() {
    pauseState === false;
  }

  return (
    <section className="pause">
      <img
        className="pauselogo"
        // onClick={() => setPause(!pause)}
        // src={!pause ? play : pauselogo}
        src={pauselogo}
        alt=""
      />
      <h1>{pause ? "Pause & breathe" : "Continue pause"}</h1>
      <p className="pauseTime">
        {timer?.getTimeValues().toString(["minutes", "seconds"])}
      </p>
    </section>
  );
}

export default Pause;
