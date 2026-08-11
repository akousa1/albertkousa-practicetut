import React, { useCallback, useState } from "react";

const ReactCallback = () => {
  //Definition: useCallback is a React Hook used to memoise
  //  functions so they are not recreated on every render
  // unless their dependencies change.

  const Child = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click me</button>;
  });

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Parent Count: {count}</button>

      <Child onClick={handleClick} />
    </>
  );
  // What happens here

  // Without useCallback:
  // - Parent re-renders → new handleClick function created
  // - Child sees new prop reference → re-renders unnecessarily

  // With useCallback:
  // - function stays the same reference
  // - Child does NOT re-render (thanks to React.memo)

  //useCallback is used to memoise functions so they are not
  // recreated on every render, which helps prevent
  // unnecessary re-renders of child components that depend
  //  on function references.

  // Now you have the performance chain:
  // - React.memo → stops child re-renders
  // - useCallback → stabilises functions passed to children
  // - useMemo (later) → stabilises computed values

  // useCallback is a React Hook used to memoise functions
  //  so they are not recreated on every render. This helps
  // improve performance by keeping function references stable,
  //  which can prevent unnecessary re-renders of child
  // components that depend on those functions as props.
  
};

export default ReactCallback;
