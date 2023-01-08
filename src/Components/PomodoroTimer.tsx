import { useEffect, useState } from "react";
import { useInterval } from "../Hooks/useInterval";
import Button from "./Button";
import Timer from "./Timer";
import billStart from "../sounds/src_sounds_bell-start.mp3";
import billFinish from "../sounds/src_sounds_bell-finish.mp3";
import SecondsToTime from "../Utils/SecondsToTime";

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
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

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

  const configureRest = (long: boolean) => {
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
  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
    if (mainTime > 0) return;
    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setcyClesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }
    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configureRest,
    configureWork,
    cyclesQtdManager,
    cycles,
  ]);
  return (
    <div className="pomodoro">
      <h2>
        {working
          ? "Você esta trabalhando"
          : resting
          ? "Você esta descansando"
          : "Começa agora a sua tarefa"}
      </h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={working ? "Trabalhando" : "Trabalhar"}
          onClick={() => configureWork()}
        />
        <Button
          text={resting ? "Descansando" : "Descansar"}
          onClick={() => configureRest(false)}
        />
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pausar" : "Iniciar"}
          onClick={() => setTimeCounting(!timeCounting)}
        />
      </div>

      <div className="details">
        <p> Ciclos concluidos: {completedCycles}</p>
        <p> Horas trabalhadas: {SecondsToTime(fullWorkingTime)}</p>
        <p> Pomodoros concluidos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
