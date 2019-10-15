import React from 'react';

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.state can only be set directly in the constructor
    this.state = {
      name: 'A lonely robot',
      age: 3,
      occupation: 'looking for love',
      pocketContents: [
        'robot wallet',
        'pet newt',
        'lint'
      ]
    };
  }

  render() {
    return (
      <div className="stateful-component">
        <p>Class components can have state.</p>
        <p>This class knows about:</p>
        <ul>
          <li>{this.state.name}</li>
          <li>Age: {this.state.age}</li>
          <li>{this.state.occupation}</li>
        </ul>
      </div>
    );
  }
}

export default StatefulComponent;