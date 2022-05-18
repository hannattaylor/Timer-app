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

  //Sätt tiden när komponenten laddas in
  useEffect(() => {
    setTimerTime(() => time?.minutes * 60);
  }, [time]);

  //Tar bort/lägger till animationen beroende på sekund/minut
  if (
    time?.seconds === 0 &&
    time?.minutes < 1 &&
    document.getElementById("animation")
  ) {
    const animation = document.getElementById("animation")!;
    animation.style.animation = "none";
  } else if (
    time?.seconds !== 0 &&
    time?.minutes! < 1 &&
    document.getElementById("animation")
  ) {
    const animation = document.getElementById("animation")!;
    animation.style.animation = `hourglass linear ${timerTime}s`;
  }

  return (
    <section className="visuell">
      <article
        className={time?.seconds === 0 && time?.minutes < 1 ? "" : "animation"}
        id="animation"
        style={{ animation: `hourglass linear ${timerTime}s` }}
      ></article>
      {/* //Redera Pausekomponent om sekunder och minuter === 0 */}
      {pauseState === true && time?.seconds === 0 && time?.minutes < 1 ? (
        <Pause />
      ) : null}
    </section>
  );
}

export default Visuel;
