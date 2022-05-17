import ResetBtn from "../Components/ResetBtn";
import "./Digital.module.scss";

type Props = {
  timeCounter: string;
};
function Digital({ timeCounter }: Props) {
  return (
    <section className="digital">
      <h1>{timeCounter}</h1>
    </section>
  );
}

export default Digital;
