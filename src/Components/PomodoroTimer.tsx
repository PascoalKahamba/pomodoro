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
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );
  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="work" onClick={() => configureWork()} />
        <Button text="texto" onClick={() => console.log(1)} />
        <Button text="texto" onClick={() => console.log(1)} />
      </div>

      <div className="details">
        <p>Exemple of the Details</p>
        <p>Exemple of the Details</p>
        <p>Exemple of the Details</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
