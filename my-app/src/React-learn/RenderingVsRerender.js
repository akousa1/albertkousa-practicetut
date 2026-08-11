import React, { useState } from "react";

const RenderingVsRerender = () => {
  //Rendering
  // In React, rendering is the process of React calling a
  //  component function to figure out what the UI should
  //  look like.

  //Re-rendering
  // A re-render happens when React runs that component
  // function again because something has changed.

  //Core idea (very important)

  //React re-renders a component when its state or props
  // change. That’s basically the foundation of how React stays
  // “reactive”.

  function Counter() {
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count + 1)}>{count}</button>;

    /* What happens here:
        - Initial render → count = 0
        - Click button → state changes
        - React re-renders component
        - UI updates with new count 

        Common misconception
            Changing a normal variable does NOT trigger a 
            re-render:
            let count = 0;

            function Counter() {
             count++;
        return <div>{count}</div>;
            }

            👉 This will NOT reliably update UI because React isn’t 
            tracking that variable.
        */

    // React only re-renders when it detects a change in
    // state or props, not normal variables.

    //Q1. A react component re-renders when its state or
    // props change. When this happens, React re-executes
    //  the component function to update the UI based on
    // the new values.

    //Q2. Re-renders
    /* Every time a component re-renders, React:
        - re-executes the component function
        - recalculates JSX
        - compares the new UI (virtual DOM diffing)
        - updates the real DOM if needed */

    // Q3. Potential Re-render problems
    /* Unnecessary re-renders can lead to:
       - slower UI in large apps
       - repeated expensive calculations
       - unnecessary child component updates
       - poor responsiveness (especially with lists, dashboards, forms) */
  }
};

export default RenderingVsRerender;
