import React from "react";
import "./App.css";
import PomodoroTimer from "./Components/PomodoroTimer";

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPromodoroTime={1500} />
    </div>
  );
}

export default App;
