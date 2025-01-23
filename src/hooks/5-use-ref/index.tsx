import { useEffect, useRef, useState } from "react";

/*
5. useRef : useRef is a powerful hook that allows you to manipulate the DOM directly.
useRef acts like a box that will store  the value which will persist across the renders.
So, it is used for 2 main purposes:
    - To store the reference of/to access the DOM element.
    - To store the value that persists across the renders.
*/

export const RefExample = () => {
  //Accessing the DOM element
  const inputRef = useRef<HTMLInputElement | null>(null);
  //HTMLInputElement is the type of the input element. It has value property inside it.

  const logToConsole = () => {
    console.log(inputRef.current?.value); //inputRef.current will give the reference to the input element

    if (inputRef.current) {
      inputRef.current.value = "Abhishek"; //We can even modify the value of the input element
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />{" "}
      {/* Assign the inputRef to the input element */}
      <button onClick={logToConsole}>Console</button>
    </div>
  );
};

export const RefExample2 = () => {
  //Storing the value that persists across the renders
  const [count, setCount] = useState<number>(0);
  const previousCount = useRef<number>(0); //useRef to store the value that persists across the renders
  //useRef of type number does not have value property. It has current property only.

  useEffect(() => {
    previousCount.current = count; //Assign the current value of count to the previousCount.current
  }, [count]);
  /*
   Imp : So, the flow is like this - 
   the render does not happen if the ref is updated. 
   So, when the count is updated, the render happens and latest value is displayed for count.
   But, after this render, the useEffect runs and updates the previousCount.current.
   As, the previousCount change does not trigger the render, the previousCount will always have the value of count before the current render.

   - But if there is any render, related or unrelated, then the previousCount will get updated.
   as previousCount has the updated value, but due to lack of rendering it is not getting displayed.
  */

  const [unrelatedState, setUnrelatedState] = useState<number>(0);
  //If I keep this unrelated state and if the page renders, then also previousCount starts showing the updated value.

  return (
    <div>
      <h1>{"Count: " + count}</h1>
      <h1>{"Previous Count: " + previousCount.current}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setUnrelatedState((prev) => prev + 1)}>
        Increment Unrelated
      </button>
    </div>
  );
};
