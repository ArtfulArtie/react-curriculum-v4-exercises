// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    alert('Button Clicked ✅');
    event.stopPropagation();
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

//event.stopPropagation() prevents an event from bubbling
// up from the child element to its parent elements.
// Normally, events start at the element that was clicked
// and move upward through its ancestors. Stopping propagation
// keeps the parent's event handler from running
// when the child button is clicked.
