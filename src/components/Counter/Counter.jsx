import React, { useState } from "react";
import "./Counter.css";
import AutoComplete from "../AutoComplete/AutoComplete";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1 );
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container">
        <button className="btn increment" onClick={increment}>Increment</button>
        <h2 className="counter">{count}</h2>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
      </div>
      {count > 9 && <AutoComplete />}
    </>
  );
};

export default Counter;