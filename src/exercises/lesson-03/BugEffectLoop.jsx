//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The bug was that the `useEffect` ran after every render because
// it did not have a dependency array. Every time the effect ran,
// it increased the count by one, which caused another render and
// created a continuous loop. Adding an empty dependency array (`[]`)
// tells React to run the effect only once when the component first mounts.
// The count updates from 0 to 1, React re-renders to display the new value,
// and then the effect does not run again.
