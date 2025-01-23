import { useEffect, useLayoutEffect, useRef, useState } from "react";

/*
7. useLayoutEffect : 
    It is similar to useEffect but it runs synchronously after the DOM has been updated.
    It is used to read from the DOM and then immediately perform some action.
    It is used to perform some action that depends on the DOM.
    Basically, it executes the callback immediately after the DOM has been updated / Before the browser paints the screen 
    / Long before the useEffect.
*/
export const LayoutExample = () => {
  /*
    Goal here is to calculate the width of the box and display it in {boxWidth}.
    If we use useEffect, it will not give the correct width of the box at least initially 
    because useEffect runs after the DOM has been updated or at least it will lag behind the DOM update.
    That's why we use useLayoutEffect here.
  */
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (boxRef.current) {
//       setBoxWidth(boxRef.current.offsetWidth);
//     }
//   });

    useLayoutEffect(() => {
      if (boxRef.current) {
        setBoxWidth(boxRef.current.offsetWidth);
      }
    });
  //offsetWidth gives the width of the element including padding and border, in our case the box

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "30%",
          height: "100px",
          backgroundColor: "lightblue",
        }}
      >
        Resize me!
      </div>
      <p>Width of the box is : {boxWidth} px!</p>
    </div>
  );
};
