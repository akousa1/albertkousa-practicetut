import React, { useState } from "react";

const StatevsProps = () => {
  //State is data managed inside a component that can change
  //over time.
  // - Managed within a component (using usestate)
  // - can change based on user actions, api calls,etc...
  // - Think: "memory of a component".

  //Props
  //Props are read-only data passed from a parent component to a
  //  child component.

  // - Used for communication between components
  // - Cannot be changed by the child
  // - Think: “inputs to a component”

  //Q1. Difference:
  // Props are read-only values passed from a
  // parent component to a child component, used for
  // communication between components. State is data
  // managed within a component that can change over time,
  // usually in response to user interaction or events.

  //Q2.
  //e.g. No, a child component cannot directly modify props
  //  because props are read-only. If a child needs to update
  //  data, it must use a function passed down from the parent.

  //Q3.
  // I would use state because the value is internal to the
  // component. I would use the useState hook and update it
  // using the setter function, typically triggered by an
  // event like an onClick.

  //Q4.
  //Props are preferred over global variables because they
  // make data flow explicit and predictable within React’s
  //  component structure. This improves maintainability and
  //  ensures components remain reusable and easier to debug.
  function Parent() {
    const [count, setCount] = useState(0);

    return <Child count={count} />;
  }

  function Child({ count }) {
    return <h1>{count}</h1>;
  }
  // count is a state in Parent
  // count is a prop in child
  return <div></div>;
};

export default StatevsProps;
