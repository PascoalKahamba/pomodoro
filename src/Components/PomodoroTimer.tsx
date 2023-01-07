import React, { useState } from "react";
import { useInterval } from "../Hooks/useInterval";
import SecondsToTime from "../Utils/SecondsToTime";
interface Props {
  defaultPromodoroTime: number;
}

const PomodoroTimer = ({ defaultPromodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPromodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>PomodoroTimer {SecondsToTime(mainTime)}</div>;
};

export default PomodoroTimer;
