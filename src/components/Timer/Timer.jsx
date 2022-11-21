import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    timer < 60 && setTimeout(() => setTimer(timer + 1), 1000);
  }, [timer]);

  return (
    <div className="timer">
      <p className="timer">{timer}</p>
    </div>
  );
};

export default Timer;