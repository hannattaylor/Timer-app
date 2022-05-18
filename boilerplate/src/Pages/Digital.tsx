import Pause from "../Components/Pause";
import ResetBtn from "../Components/ResetBtn";
import "./Digital.module.scss";

interface timeObj {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  secondTenths: number;
}
type Props = {
  timeCounter: string;
  pauseState: boolean;
  time: timeObj;
};
function Digital({ timeCounter, pauseState, time }: Props) {
  console.log(timeCounter);

  return (
    <section className="digital">
      <h1>{timeCounter}</h1>
      {pauseState === true && time?.seconds === 0 && time?.minutes < 1 ? (
        <Pause />
      ) : null}
    </section>
  );
}

export default Digital;
