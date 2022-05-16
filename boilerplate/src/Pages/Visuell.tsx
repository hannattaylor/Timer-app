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
    <section className={styles}>
      {timetest > 0 ? (
        <article
          style={{ animation: `timeglas linear ${timetest}s` }}
        ></article>
      ) : null}
    </section>
  );
}

export default Visuel;
