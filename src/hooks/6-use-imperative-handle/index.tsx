import { forwardRef, useImperativeHandle, useRef } from "react";

/*
6. useImperativeHandle : 
    It has a very specific use case.
    If we have a ref inside a child component and we want to expose certain functions of the child component to the parent component,
    then we use useImperativeHandle.
*/

type CustomInputHandle = {
  focusInput: () => void;
  clearInput: () => void;
};

export const ImperativeHandleExample = () => {
  const parentRef = useRef<CustomInputHandle | null>(null);
  //created a ref of type CustomInputHandle which has focusInput and clearInput functions

  return (
    <div>
      <CustomInput ref={parentRef} />{" "}
      {/* Assign the inputRef to the CustomInput */}
      <button onClick={() => parentRef.current?.focusInput()}>Focus</button>
      {/* parentRef.current will give the reference to the CustomInput and focusInput from child component is called*/}
      <button onClick={() => parentRef.current?.clearInput()}>Clear</button>
    </div>
  );
};

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  //useImperativeHandle is used to expose certain functions to the parent component
  //Here, we are adding the focusInput and clearInput functions to the parent ref
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      inputRef.current!.value = "";
    },
  }));

  return <input type="text" ref={inputRef} />;
});
