import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleDouble = () => {
    setCounter(counter * 2);
  };

  return (
    <>
      <h1>Counter</h1>
      {counter % 2 == 0 ? (
        <h1 style={{ color: "green" }}>{counter}</h1>
      ) : (
        <h1 style={{ color: "red" }}>{counter}</h1>
      )}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleDouble}>Double</button>
    </>
  );
}
