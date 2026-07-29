// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((c) => c + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

//useState causes a re-render when the value changes,
// which allows React to update the UI with the new count.
// useRef can store values without causing a re-render,
// so it would be useful for values that need to persist but
// do not need to update what is displayed on the screen.
