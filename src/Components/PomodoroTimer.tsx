import React, { useState } from "react";
import { useInterval } from "../Hooks/useInterval";
interface Props {
  defaultPromodoroTime: number;
}

const PomodoroTimer = ({ defaultPromodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPromodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>PomodoroTimer {mainTime}</div>;
};

export default PomodoroTimer;
