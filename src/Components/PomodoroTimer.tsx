import { useState } from "react";
import { useInterval } from "../Hooks/useInterval";
import Button from "./Button";
import Timer from "./Timer";
interface Props {
  PromodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = ({ PromodoroTime }: Props) => {
  const [mainTime, setMainTime] = useState(PromodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="texto" onClick={() => console.log(1)} />
        <Button text="texto" onClick={() => console.log(1)} />
        <Button text="texto" onClick={() => console.log(1)} />
      </div>
    </div>
  );
};

export default PomodoroTimer;
