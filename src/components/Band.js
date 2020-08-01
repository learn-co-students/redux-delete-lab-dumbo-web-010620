import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    console.log('you can click me anytime babe lol')
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return(
      <li>
        <span>{this.props.band.name}</span>
        <button onClick={this.handleClick}>DELETE</button>
      </li>
    );
  }
};

export default Band;
