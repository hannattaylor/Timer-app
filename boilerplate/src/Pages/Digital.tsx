import TimesUp from "../Components/TimesUp";
import "./Digital.module.scss";
import timeObj from "../Components/Interface";

type Props = {
  timeCounter: string;
  pauseState: boolean;
  interval: boolean;
  time: timeObj;
};
function Digital({ timeCounter, pauseState, time, interval }: Props) {
  return (
    <section className="digital">
      <h1>{timeCounter}</h1>
      {pauseState === false &&
      interval === false &&
      time?.seconds === 0 &&
      time?.minutes < 1 ? (
        <TimesUp />
      ) : null}
    </section>
  );
}

export default Digital;
