import { useState } from "react";
import startLogo from "../Images/start.svg";
import { Timer2 } from "./Timer2";
import "./Loading.module.scss";

function Loading() {
  const [startApp, setStartApp] = useState(false);
  function Start() {
    setStartApp(() => !startApp);
  }
  return (
    <section>
      {!startApp ? (
        <section className="wrap">
          <img src={startLogo} alt="picture of logo" onClick={Start} />
        </section>
      ) : null}

      {startApp ? <Timer2 /> : null}
    </section>
  );
}

export default Loading;
