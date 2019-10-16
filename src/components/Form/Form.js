import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({stuff: [...this.state.stuff, event.target.newItem.value]});
    event.target.newItem.value = '';
  }

  handleClick = event => {
    let removeAtIndex = parseInt(event.target.dataset.index);
    this.setState({stuff: [
      ...this.state.stuff.slice(0, removeAtIndex),
      ...this.state.stuff.slice(removeAtIndex + 1)
    ]});
  }

  render() {
    let items = this.state.stuff.map( (thing, index) => {
      return <p key={index} className="item" data-index={index} onClick={this.handleClick}>{thing}</p>;
    });

    return (
      <div className="form">
        <div className="items">
          {items}
        </div>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="newItem">Input some text:</label>
          <input type="text" name="newItem" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;