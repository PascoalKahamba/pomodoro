import React from "react";

const SecondsToTime = (seconds: number): string => {
  const zeroLeft = (n: number) => Math.floor(n);
  const min = zeroLeft(seconds / 60) % 60;
  return `${min}s`;
};

export default SecondsToTime;
