/*
useMemo is a React hook that memoizes the result of a function call and recomputes it only when its dependencies change. It is used to optimize performance by avoiding unnecessary recalculations of expensive computations on every render.
Used for optimizing performance of functional components by memoizing the result of expensive calculations.
Helps to avoid unnecessary re-renders by memoizing values.
*/

import React, { useState, useMemo } from "react";

export default function useMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation (pretend this takes time)
  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // re-run only if count changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
