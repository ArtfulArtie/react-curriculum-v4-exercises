// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The bug was that the state value was being modified directly
// using `count++` before React was notified of the change.
// This bypasses React's state management because changes
// should be made through the state setter function. The fix is
// to remove `count++` and update the state directly with `setCount(count + 1)`.
// This allows React to properly track the state change and
// re-render the component with the updated count.
