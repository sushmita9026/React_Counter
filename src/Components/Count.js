
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null)
  

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
 
  const start = () => {
    if (!intervalId) {
      const increase = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(increase);
    }
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <div>
        <button id="increase" onClick={increment}>Increment</button>
        <button id="decrease" onClick={decrement}>Decrement</button>
        <button id="stop"    onClick={stop}>StopBtn</button>
        <button id="start"  onClick={start}>StartBtn</button>
    
      </div>
    </div>
  );
};

export default Counter;
