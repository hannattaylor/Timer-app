import { useEffect } from "react";
import { useState } from "react";
import styles from "./Visuell.module.scss";
import "../App.scss";

type Props = {
  time: {
    seconds: number;
    minutes: number;
  };
};
function Visuel({ time }: Props) {
  const [timetest, settimtest] = useState(0);
  console.log(time?.minutes);

  useEffect(() => {
    settimtest(() => time?.minutes * 60);
  }, []);
  console.log(timetest);

  return (
    <section className="visuell">
      {timetest > 0 ? (
        <article
          className="animation"
          style={{ animation: `timeglas linear ${timetest}s` }}
        ></article>
      ) : null}
    </section>
  );
}

export default Visuel;
