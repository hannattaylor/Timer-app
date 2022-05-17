import { Link } from "react-router-dom";
type Props = {
  reset: any;
};

//Funktion som renderar stopp-knapp, tar emot reset via props från "Visuell"
//Kappen tar en via Link till "/" men sidan refreshas  inte?!
function ResetBtn({ reset }: Props) {
  return (
    <section>
      {/* <Link to="/"> */}
      <button onClick={reset}> Starta om här</button>
      {/* </Link> */}
    </section>
  );
}

export default ResetBtn;
