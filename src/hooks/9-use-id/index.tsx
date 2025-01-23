import { useId } from "react";

//This hook is used to generate a unique id for the element.
export const IdExample = () => {
  const id1 = useId();
  const id2 = useId();

  return (
    <div>
      <label htmlFor={id1}>First Name</label>
      <input id={id1} type="text" />
      <label htmlFor={id2}>Last Name</label>
      <input id={id2} type="text" />
    </div>
  );
};
