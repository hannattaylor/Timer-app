import ResetBtn from "../Components/ResetBtn";
import styles from "./Digital.module.scss";

type Props = {
  timeCounter: string;
};
function Digital({ timeCounter }: Props) {
  return (
    <div className={styles.section} id="section">
      {timeCounter}
    </div>
  );
}

export default Digital;
