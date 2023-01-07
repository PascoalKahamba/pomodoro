import React from "react";
import SecondsToTime from "../Utils/SecondsToTime";

interface Props {
  mainTime: number;
}

const Timer = ({ mainTime }: Props) => {
  return <div className="timer">{SecondsToTime(mainTime)}</div>;
};

export default Timer;
