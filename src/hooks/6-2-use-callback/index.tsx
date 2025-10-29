/*
useCallback is a React hook that returns a memoized version of a callback function. It is used to optimize performance 
by preventing unnecessary re-creations of functions on every render, especially when passing them as props to child components.
Used for optimizing performance of functional components by memoizing callback functions.
Helps to avoid unnecessary re-renders of child components by ensuring that the same function instance is passed as a prop.
It usually gives no benefit when the function is defined inside the component and not passed to child components.
*/

import React, { useState, useCallback } from "react";

function Child({ onClick }: { onClick: () => void }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Increment</button>;
}

export default function useCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // same function instance every render

  return (
    <div>
      <h1>{count}</h1>
      <Child onClick={increment} />
    </div>
  );
}
