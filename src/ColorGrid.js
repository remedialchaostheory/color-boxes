import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import './ColorGrid.css';

class ColorGrid extends Component {
  static defaultProps = {
    allColors: [
      'blue',
      'yellow',
      'green',
      'red',
      'purple',
      'pink',
    ],
    numBoxes: 18
  };


  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(() =>
        (<ColorBox allColors={this.props.allColors}/>));
    return (
        <div className="ColorGrid">
          {boxes}
        </div>
    );
  }
}

export default ColorGrid;
