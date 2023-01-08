import { zeroLeft } from "./ZeroLeft";

const SecondsToMinutes = (seconds: number): string => {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
};

export default SecondsToMinutes;
