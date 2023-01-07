import React from "react";
import "./App.css";
import PomodoroTimer from "./Components/PomodoroTimer";

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer
        PromodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
