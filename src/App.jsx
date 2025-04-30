import { useState, useRef } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const intervalRef = useRef(null);

  const startWatch = () => {
    if (intervalRef.current !== null) return; 

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);
  };

  const resetWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
    setMinutes(0);
  };
  const stopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <>
      <h1>Stopwatch</h1>
      <p>
        Time {minutes}:{formatTime(seconds)}
      </p>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </>
  );
}

export default App;
