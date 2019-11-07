import React, { Component } from 'react';
import './ColorBox.css';
import {choose} from "./helpers";

class ColorBox extends Component {
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
    return (
        <div className="ColorBox" style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
        </div>
    );
  }
}

export default ColorBox;
