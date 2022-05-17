import { useEffect, useState } from "react";
import analogClock from "../Images/clock1.svg";
import * as styles from "./Analog.module.scss";

interface timeObj {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  secondTenths: number;
}

type Props = {
  timeCounter: timeObj;
};

function Analog({ timeCounter }: Props) {
  const [min, setMin] = useState(Number);

  let minDeg: number = 360 / 60;
  let minCalc: number = min * minDeg;

  useEffect(() => {
    setMin(timeCounter?.minutes);
  }, [timeCounter?.minutes]);

  return (
    <div>
      <section id="clockSection" className={styles.clockSection}>
        <img id="clock" className={styles.clock} src={analogClock} alt="" />

        <svg
          id="sek"
          className={styles.sek}
          width="11"
          height="250"
          viewBox="0 0 11 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00355 129.192C8.75704 129.192 10.9812 126.96 10.9713 124.206C10.9614 121.452 8.72123 119.22 5.96775 119.22C3.21426 119.22 0.990132 121.452 1.00002 124.206C1.00991 126.96 3.25006 129.192 6.00355 129.192Z"
            fill="#555555"
          />
          <path
            d="M6.52523 0.999994C6.52324 0.447713 6.07392 -1.09832e-08 5.52164 -7.0755e-09C4.96935 -3.16781e-09 4.52324 0.447713 4.52523 0.999994L4.96766 124.222C4.96965 124.775 5.41897 125.222 5.97125 125.222C6.52354 125.222 6.96965 124.775 6.96766 124.222L6.52523 0.999994Z"
            fill="#555555"
          />
        </svg>

        <svg
          id="min"
          className={styles.min}
          style={{
            transform: `rotate(${minCalc}deg)`,
          }}
          width="17"
          height="248"
          viewBox="0 0 17 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="minHand"
            // className={styles.minHand}
            transform="rotate(6deg)"
            d="M9.01427 131.172C13.4246 131.172 16.987 127.596 16.9711 123.186C16.9553 118.776 13.3672 115.2 8.95692 115.2C4.54663 115.2 0.984212 118.776 1.00005 123.186C1.01588 127.596 4.60397 131.172 9.01427 131.172Z"
            fill="black"
          />
          <path
            d="M10.5716 1.99638C10.5676 0.893809 9.67059 -2.19267e-08 8.56801 -1.41255e-08C7.46544 -6.32418e-09 6.57483 0.893809 6.57879 1.99638L7.01407 123.226C7.01803 124.328 7.91506 125.222 9.01763 125.222C10.1202 125.222 11.0108 124.328 11.0069 123.226L10.5716 1.99638Z"
            fill="black"
          />
        </svg>
      </section>
    </div>
  );
}

export default Analog;
