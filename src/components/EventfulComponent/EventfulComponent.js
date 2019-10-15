import React from 'react';


export default function ClickMe() {
  function handleMouseDown(e) {
    e.target.innerHTML = 'Ouch!';
  }

  function handleMouseUp(e) {
    e.target.innerHTML = 'Click me!';
  }

  return (
    <div>
      <p onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Click me!</p>
    </div>
  );
}