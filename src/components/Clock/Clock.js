import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // componentDidMount is the first thing the component does when it comes into existence
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <p>React knows to re-render components when their state is changed.</p>
        <p>I am a clock the time is: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;