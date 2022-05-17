import { useEffect } from "react";
import { useState } from "react";
import styles from "./Visuell.module.scss";
import "../App.scss";
import ResetBtn from "../Components/ResetBtn";

type Props = {
  time: {
    seconds: number;
    minutes: number;
  };
};

//Funktion som tar emot vald tid via props från "Timer"
function Visuel({ time }: Props) {
  const [timerTime, setTimerTime] = useState(0);
  console.log(time?.minutes + "min" + time.seconds + "sek");

  //Funktion som stannar animation
  function resetTimer() {
    setTimerTime(() => 0);
  }

  //Sätt tiden när komponenten laddas in
  useEffect(() => {
    setTimerTime(() => time?.minutes * 60);
  }, []);

  return (
    <section className="visuell">
      {timerTime > 0 ? (
        <article
          className="animation"
          style={{ animation: `hourglass linear ${timerTime}s` }}
        ></article>
      ) : null}
      {/* <ResetBtn reset={resetTimer} /> */}
    </section>
  );
}

export default Visuel;
