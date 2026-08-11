import React, { useState } from "react";

const ReactMemo = () => {
  // Definition: React.memo is a higher-order component
  // that prevents a component from re-rendering if its
  // props have not changed.
  // e.g.
  const Child = React.memo(function Child({ name }) {
    console.log("Child rendered");

    return <h1>{name}</h1>;
  });

  // React.memo is a higher-order component used to prevent
  // unnecessary re-renders of a component when its props have
  // not changed. It improves performance by memoising the
  // component output, so even if the parent re-renders, the
  // child will only re-render if its props are different.

  // It does NOT help if:
  // - props are new object references every render
  // - functions are recreated every time (this links to useCallback)
  // - complex nested objects change reference

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>

      <Child name="Alex" />
    </>
  );
  // What happens here
  // - Parent re-renders when count changes ✔️
  // - But Child does NOT re-render ✔️ (because props didn’t
  //  change)
};

export default ReactMemo;
