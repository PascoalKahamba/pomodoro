import React, { useState } from "react";
import { useInterval } from "../Hooks/useInterval";
import SecondsToTime from "../Utils/SecondsToTime";
import Button from "./Button";
interface Props {
  defaultPromodoroTime: number;
}

const PomodoroTimer = ({ defaultPromodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(defaultPromodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h1>You are working:</h1>
      <Button text="texto" />
    </div>
  );
};

export default PomodoroTimer;
