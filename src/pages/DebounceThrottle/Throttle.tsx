import { Button } from "@mui/material";
import { Fragment, useCallback, useState } from "react";

export const ThrottleButton = () => {
  const [display, setDisplay] = useState<number>(0);
  const throttle = (func: Function, limit: number) => {
    let timeout: any;
    return (...args: any) => {
      if (!timeout) {
        func(...args);
        timeout = setTimeout(() => {
          timeout = null;
        }, limit);
        //the function is called immediately and then it is blocked for the next 'limit' milliseconds
      }
    };
  };

  const handleClick = () => {
    setDisplay((prev) => prev + 1);
    console.log("Throttle Clicked");
  };

  const handleThrottleClick = useCallback(throttle(handleClick, 2000), []);

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={handleThrottleClick}
        style={{ margin: "10px" }}
      >
        Throttle Button
      </Button>
      <div>{display}</div>
    </Fragment>
  );
};
