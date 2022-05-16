import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/poster.png";
import { Timer2 } from "./Timer2";

function Loading() {
  const [startApp, setStartApp] = useState(false);
  function Start() {
    setStartApp(() => !startApp);
  }
  return (
    <section>
      {!startApp ? (
        <img src={logo} alt="picture of logo" onClick={Start} />
      ) : null}
      {startApp ? <Timer2 /> : null}
    </section>
  );
}

export default Loading;
