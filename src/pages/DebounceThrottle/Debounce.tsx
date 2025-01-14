import { Button } from "@mui/material";
import { Fragment, useCallback, useState } from "react";

export const DebounceButton = () => {
  const [display, setDisplay] = useState<number>(0);
  const debounce = (func: Function, delay: number) => {
    let timeout: any;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
      //everytime the debounce function is called, the previous setTimeout is cleared and a new one is set
      //the function is called only after the delay has passed.
    };
  };

  const handleClick = () => {
    setDisplay((prev) => prev + 1);
    console.log("Debounce Clicked");
  };

  const handleDebounceClick = useCallback(debounce(handleClick, 2000), []);

  return (
    <Fragment>
      <Button
        onClick={handleDebounceClick}
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
      >
        Debounce Button
      </Button>{" "}
      <div>{display}</div>
    </Fragment>
  );
};
