import React from 'react';

export default function ChildComponent(props) {
  return (
    <div className="child-component">
      <p>I am child #{props.number}</p>
    </div>
  );
}