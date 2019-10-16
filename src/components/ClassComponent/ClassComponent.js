import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <p>I am a class component!</p>
        <p>Class components can store state, so are good for more complex components that need to change.</p>
      </>
    );
  }
}

export default ClassComponent;