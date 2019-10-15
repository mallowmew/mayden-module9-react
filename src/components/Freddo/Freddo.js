import React from 'react';
import './Freddo.css';

class Freddo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoin: 0,
      freddoValue: 0.25
    };
    this.tick();
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      600000);
  }

  tick() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
    .then( data => data.json() )
    .then( data => {
      let rate_float = parseFloat(data.bpi.GBP.rate_float).toFixed(2);
      this.setState({
        bitcoin: rate_float
      });
    });
  }

  calculateFreddos() {
    return (this.state.bitcoin / this.state.freddoValue).toFixed(0);
  }

  render() {
    let freddos = this.calculateFreddos();

    let items = [];
    let iterations = (freddos > 100) ? 100 : freddos;
    for (let i = 0; i < iterations; i++) {
      items.push(<img src="./freddo.png" alt="Terrible chocolate frog" />);
    }

    return (
      <div className="freddo">
        <p>1 Bitcoin = £{this.state.bitcoin}</p>
        <p>that's {freddos} Freddo bars!</p>
        <div className="freddos">
          {items}
        </div>
      </div>
    );
  }
}

export default Freddo;