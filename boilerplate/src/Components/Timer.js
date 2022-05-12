import useTimer from "easytimer-react-hook";
import React from "react";

export function Timer() {
  /* The hook returns an EasyTimer instance and a flag to see if the target has been achieved */
  const [timer, isTargetAchieved] = useTimer({
    /* Hook configuration */
  });

  timer.start({
    startValues: [0, 0, 1, 0, 0],
    countdown: true,
    /* EasyTimer start configuration */
  });

  return <div>{timer.getTimeValues().toString()}</div>;
}
