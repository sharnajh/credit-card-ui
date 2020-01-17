import React, { Component } from "react";

// This is where I check out code from StackOverflow to answer questions.

class StackOverflow extends Component {
  state = {
    randomItem: ["one", "two", "three", "four"],
    selected: null,
    clicked: false
  };
  handleClick = () => {
    this.setState(prev => ({
      clicked: true,
      selected:
        prev.randomItem[Math.floor(Math.random() * prev.randomItem.length) + 0]
    }));
  };
  render() {
    return (
      <div>
        <p>{this.state.selected}</p>
        <p onClick={this.handleClick}>
          {this.state.clicked && this.state.selected} Hi
        </p>
      </div>
    );
  }
}

export default StackOverflow;
