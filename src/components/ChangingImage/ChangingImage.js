import React from 'react';
import './ChangingImage.css';

class ChangingImage extends React.Component {
  // pic paths seem to be relative to public folder
  pics = {
    slime: './DQ_Slime.png',
    gooey: './KSA_Gooey.png'
  };

  constructor(props) {
    super(props);

    this.state = {
      toggleOn: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      toggleOn: !state.toggleOn
    }));
  }

  render() {
    return (
      <div className="changing-image">
        <img src={this.state.toggleOn ? this.pics.slime : this.pics.gooey} onClick={this.handleClick} />
      </div>
    );
  }
}

export default ChangingImage;