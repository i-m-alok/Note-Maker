import React, { Component } from "react";

export default class Snippet extends Component {
  state = {
    text: ""
  };
  componentDidMount() {
    this.setState({ text: this.props.text });
  }
  render() {
    return (
      <div className="d-flex-col card m-2">
        <p className="snippet">{this.props.text + "..."}</p>
      </div>
    );
  }

  // utility method
  showSome = () => {
    return Math.floor((40 * this.state.text.length) / 100);
  };
}
