import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import { choose } from "./helpers";

class ColorGrid extends Component {
  static defaultProps = {
    allColors: [
        'blue',
      'yellow',
      'green',
      // 'red',
      // 'purple',
      // 'black',
      // 'white',
      // 'pink',
    ],
    numBoxes: 18
  };

  constructor(props) {
    super(props);
    this.state = {
      color: choose(this.props.allColors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
     let newColor;
     do {
       newColor = choose(this.props.allColors);
     } while (newColor === this.state.color);

     this.setState({ color: newColor });
  }
  handleClick(e) {
    this.pickColor();
  }

  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(() => <ColorBox />);
    return (
        <div className="ColorGrid" style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
          {boxes}
        </div>
    );
  }
}

export default ColorGrid;
