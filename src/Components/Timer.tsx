import React from "react";
import SecondsToMinutes from "../Utils/SecondsToMinutes";

interface Props {
  mainTime: number;
}

const Timer = ({ mainTime }: Props) => {
  return <div className="timer">{SecondsToMinutes(mainTime)}</div>;
};

export default Timer;
