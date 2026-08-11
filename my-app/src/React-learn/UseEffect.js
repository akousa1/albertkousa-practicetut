import React, { useEffect, useState } from "react";

const UseEffect = ({ userId }) => {
  // useEffect is a React Hook used to handle side effects
  // in functional components.

  //A side effect is anything that happens outside of
  // rendering the UI, such as:
  // - fetching data from an API
  // - setting up subscriptions or timers
  // - interacting with the DOM directly
  // - synchronising external systems with your component

  //e.g. Basic
  //   useEffect(() => {
  //     console.log("Component mounted or updated");
  //   });

  //e.g. Dependency Array
  //   useEffect(() => {
  //     console.log("Runs only once on mount");
  //   }, []);
  // - [] → runs once when component mounts
  // - [value] → runs when value changes
  // - no array → runs after every render
  //The dependency array is the second argument of useEffect
  // that controls when the effect runs.

  //Interview Understanding
  //useEffect gives us control over when side effects run
  // during the component lifecycle.

  //Q1.
  //useEffect is a React Hook used to handle side effects in
  // functional components. Side effects are any operations
  // that happen outside of rendering the UI, such as fetching
  //  data from APIs, interacting with the DOM, or setting up
  //  timers and subscriptions.

  //Q2.
  // The dependency array is the second parameter of useEffect
  //  that controls when the effect runs. If it’s empty, the
  // effect runs once when the component mounts. If it contains
  //  values, the effect will re-run whenever those values
  // change.

  // Q3.
  // The dependency array controls when a useEffect runs. It
  // helps prevent unnecessary executions by only re-running
  // the effect when specific values change, or only once
  // when the component mounts if the array is empty.

  //Q4.
  //The dependency array helps prevent unnecessary re-runs of
  // a useEffect, which improves performance and avoids
  // unintended behaviour. Without it, the effect can run on
  // every render, and in some cases—especially when state is
  //  updated inside the effect—it can lead to repeated
  // re-renders or even infinite loops.
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);
  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  );
};

export default UseEffect;
