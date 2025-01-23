import { useReducer } from "react";
/*
4. useReducer : useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values 
or when the next state depends on the previous one. 
useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down 
instead of callbacks.

useReducer is related to reducers in Redux, but it’s built into React.
It is used to store complex state logic in a component.

*/

interface ICount {
  count: number;
}

const initialState: ICount = {
  count: 0,
};

// The reducer is a function that takes the current state and an action as arguments and returns a new state result.
const reducer = (state: ICount, action: { type: any; payload?: number }) => {
  switch (
    action.type //based on the action type, we can perform the operation
  ) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "DOUBLE":
      return { count: state.count * 2 };
    case "ADDPAYLOAD":
      return { count: state.count + (action?.payload ?? 0) };
    default:
      return state;
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useReducer returns an array with two elements. The first element is the current state value, and the second element is a dispatch function.
  // You can call this dispatch function with an action type and an optional payload to update the state.

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "DOUBLE" })}>Double</button>
      <button onClick={() => dispatch({ type: "ADDPAYLOAD", payload: 5 })}>
        AddPayload
      </button>
    </div>
  );
};
