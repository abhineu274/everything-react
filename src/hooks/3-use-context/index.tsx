import { createContext, useContext, useEffect, useState } from "react";

/*
3. useContext : useContext hook is used to consume the context value that is provided by a parent component.
    This Hook is for state management and to avoid prop drilling.
    It is somewhere in between useState and Redux.
*/

const GlobalContext = createContext<any>(null); //create a context

export const ContextExample = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ toggle, setToggle }}>
      {/* Wrap the entire component inside the COntext Provide and pass the value that you want to share with the child components. 
    In this case, we are sharing toggle and setToggle with the child components.
    */}
      <div>
        <h1>Context Example : Parent</h1>
        <ChildToggle />
        <ChildDisplay />
        {/* <ChildToggle setToggle={setToggle} />
      <ChildDisplay toggle={toggle} /> */}
      </div>
    </GlobalContext.Provider>
  );
};

const ChildToggle = () => {
  const { setToggle } = useContext(GlobalContext); //consume the context value
  return (
    <div>
      <button onClick={() => setToggle((prev: boolean) => !prev)}>
        Toggle
      </button>
    </div>
  );
};

const ChildDisplay = () => {
  const { toggle } = useContext(GlobalContext); //consume the context value
  return (
    <div>
      <p>{toggle ? "ON" : "OFF"}</p>
    </div>
  );
};
