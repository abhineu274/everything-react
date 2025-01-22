import { useState } from "react";
import './index.css' // import css file

/*
1. useState - basic react hook
*/

export const StateExample = () => {
  const [count, setCount] = useState<number>(0);
  //basically a state variable and its setter function
  //if we use normal let, then the value won't get updated in the ui after changing
  //in react, for ui to change, state need to be changed.
  //Then only the component will re-render and the ui will be updated
  //virtual dom will be updated and the real dom will be updated only for the changed part

  const incrementCounter = () => {
    setCount((prev) => prev + 1); //prev is the previous state
  };

  return (
    <div>
      <div className="counter">{count}</div>
      <button onClick={incrementCounter}>Incerement</button>
    </div>
  );
};
