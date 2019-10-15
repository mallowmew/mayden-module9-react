import React from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';

export default function ParentComponent() {
  let children = [1, 2, 3];

  return (
    <div className="parent-component">
      <p>I am a parent, I have three children;</p>
        {children.map( child => <ChildComponent key={child} number={child} /> )}
    </div>
  );
}