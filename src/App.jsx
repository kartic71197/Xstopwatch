import { useState, useRef } from "react";

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startWatch = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetWatch = () => {
    stopWatch();
    setTotalSeconds(0);
  };

  const formatTime = (value) => value.toString().padStart(2, "0");

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <>
      <h1>Stopwatch</h1>
      <p>
        Time: {(minutes)}:{formatTime(seconds)}
      </p>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </>
  );
}

export default App;
