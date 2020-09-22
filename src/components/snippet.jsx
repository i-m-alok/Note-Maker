import React, { Component } from "react";

export default class Snippet extends Component {
  state = {
    text: ""
  };
  componentDidMount() {
    this.setState({ text: this.props.text });
  }
  render() {
    console.log("Rendered");
    return (
      <div className="card-body">
        <p className="card">{this.props.text}</p>
      </div>
    );
  }
}
