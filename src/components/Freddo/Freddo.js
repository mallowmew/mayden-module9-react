import React from 'react';
import './Freddo.css';

class Freddo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoin: 0,
      freddoValue: 0.25,
      screen: {
        width: 0,
        height: 0
      }
    };
    this.tick();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.timerId = setInterval(
      () => this.tick(),
      600000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
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
    let freddoSize = 60; // Desired size of the frog, in pixels
    let freddosThatFitOnScreen = Math.floor(this.state.screen.width / freddoSize);

    let items = [];
    let iterations = freddos > freddosThatFitOnScreen ? freddosThatFitOnScreen : freddos;
    for (let i = 0; i < iterations; i++) {
      items.push(<img key={i} src="./freddo.png" alt="Terrible chocolate frog" style={{width:freddoSize, height:freddoSize}} />);
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