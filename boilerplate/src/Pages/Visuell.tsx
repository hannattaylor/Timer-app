import { useEffect } from "react";
import { useState } from "react";
import Pause from "../Components/Pause";
import "./Visuell.module.scss";

type Props = {
  time: {
    seconds: number;
    minutes: number;
  };
  pauseState: boolean;
};

//Funktion som tar emot vald tid via props från "Timer"
function Visuel({ time, pauseState }: Props) {
  const [timerTime, setTimerTime] = useState(0);
  console.log(time.seconds);

  //Sätt tiden när komponenten laddas in
  useEffect(() => {
    setTimerTime(() => time?.minutes * 60);
  }, [time]);

  return (
    <section className="visuell">
      <article
        className="animation"
        //har problem med att animationen inte startar om när pausen är slut, jar testat med infinite i animationen men få verkar allt hamna i osynk...
        style={{ animation: `hourglass linear ${timerTime}s infinite` }}
      ></article>

      {pauseState === true && time?.seconds === 0 && time?.minutes < 1 ? (
        <Pause />
      ) : null}
    </section>
  );
}

export default Visuel;
