import "./Pause.module.scss";
import useTimer from "easytimer-react-hook";

function Pause() {
  const [timer, isTargetAchieved] = useTimer({});
  timer.start({
    startValues: {
      minutes: 5,
    },
    countdown: true,
  });

  return (
    <section className="pause">
      <h1>Pause</h1>
      <h1>{timer.getTimeValues().toString()}</h1>
    </section>
  );
}

export default Pause;
