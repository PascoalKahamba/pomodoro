import { useEffect, useState } from "react";
import { useInterval } from "../Hooks/useInterval";
import Button from "./Button";
import Timer from "./Timer";
import billStart from "../sounds/src_sounds_bell-start.mp3";
import billFinish from "../sounds/src_sounds_bell-finish.mp3";

const audioStartWorking = new Audio(billStart);
const audioStopWorking = new Audio(billFinish);
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = ({
  pomodoroTime,
  longRestTime,
  shortRestTime,
  cycles,
}: Props) => {
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setcyClesQtdManager] = useState(
    new Array(cycles - 1).fill(true)
  );
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = useState(0);
  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
    if (mainTime > 0) return;
    if (working && cyclesQtdManager.length > 0) {
      configureResting(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureResting(true);
      setcyClesQtdManager(new Array(cycles - 1).fill(true));
    }
  }, [working, resting]);
  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );
  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    audioStartWorking.play();
  };

  const configureResting = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    if (long) {
      setMainTime(longRestTime);
    } else {
      setMainTime(shortRestTime);
    }
    audioStopWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={working ? "Working" : "Work"}
          onClick={() => configureWork()}
        />
        <Button text="Rest" onClick={() => configureResting(false)} />
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pause" : "Play"}
          onClick={() => setTimeCounting(!timeCounting)}
        />
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
