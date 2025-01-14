import { DebounceButton } from "./Debounce";
import { ThrottleButton } from "./Throttle";

export const DebounceThrottle = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "20px" }}>
      <div>
        <DebounceButton />
      </div>
      <div>
        <ThrottleButton />
      </div>
    </div>
  );
};

/*
1. **Purpose**:  
   - **Debounce** delays the execution of a function until a specified period of inactivity has passed. 
                It's great for scenarios where you want to wait until the user stops performing an action.  
   - **Throttle** ensures a function is executed at most once within a specified time interval,
                even if the action is triggered repeatedly. It's ideal for situations where you want to control the frequency of execution.

2. **Execution**:  
   - **Debounce** waits until there’s a pause in the event stream and then executes the function once.  
   - **Throttle** executes the function immediately (or at regular intervals) and 
                ignores additional calls within the defined interval.

3. **Delay vs. Interval**:  
   - **Debounce** focuses on a delay after the last action.  
   - **Throttle** enforces a consistent interval between function executions.

4. **Best Use Cases**:  
   - **Debounce** is best for actions like search inputs, 
                where you want to wait until the user stops typing before making an API call.  
   - **Throttle** is better suited for actions like scrolling, resizing, or drag-and-drop, 
                where you want to ensure the function runs at regular intervals without overloading the system. 
*/
