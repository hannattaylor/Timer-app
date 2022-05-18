import "./TimesUp.module.scss";
import alarm from "../Images/alarm_icon.svg";

export default function TimesUp() {
  return (
    <section className="section">
      <img className="alarmBell" src={alarm} alt="" />
      <h5 className="timesUp">Times up!</h5>
    </section>
  );
}
