import { useEffect } from "react";
import { useState } from "react";
import TimesUp from "../Components/TimesUp";
import "./Visuell.module.scss";
import timeObj from "../Components/Interface";

type Props = {
  time: timeObj;
  pauseState: boolean;
  interval: boolean;
};

//Funktion som tar emot vald tid via props från "Timer"
function Visuel({ time, pauseState, interval }: Props) {
  const [timerTime, setTimerTime] = useState(0);

  //Sätt tiden för hur länge animationen ska köra
  useEffect(() => {
    if (time?.minutes > 0) setTimerTime(() => time?.minutes * 60);
    else {
      setTimerTime(() => time?.seconds);
    }
  }, [time]);

  //Tar bort/lägger till animationen beroende på sekund/minut
  if (
    time?.seconds === 0 &&
    time?.minutes < 1 &&
    document.getElementById("animation")
  ) {
    const animation = document.getElementById("animation")!;
    animation.style.animation = "none";
  } else if (time?.minutes >= 1 && document.getElementById("animation")) {
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
      {pauseState === false &&
      interval === false &&
      time?.seconds === 0 &&
      time?.minutes < 1 ? (
        <TimesUp />
      ) : null}
    </section>
  );
}

export default Visuel;
