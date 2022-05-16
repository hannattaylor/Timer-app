import { useEffect } from "react";
import { useState } from "react";
import * as styles from "./Visuell.module.scss";

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
    <section>
      {timetest > 0 ? (
        <section
          className={styles.visuell}
          //   style={{ transitionDuration: ` ${timetest}s` }}
          //   style={{ background: "linear-gradient(#e66465, #9198e5)" }}
          style={{ animation: `timeglas linear ${timetest}s` }}
        >
          <h1>Visuell</h1>
        </section>
      ) : null}
    </section>
  );
}

export default Visuel;
