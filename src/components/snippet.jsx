import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Snippet extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  componentDidMount() {
    this.setState({ text: this.props.text });
  }

  // method to call the handle edit method in App.js
  onClick = () => {
    const snippetText = document.getElementById(`snippet-text${this.props.id}`);
    if (snippetText) {
      this.props.handleEditClick(snippetText.innerText);
    }
  };
  render() {
    return (
      <div className="d-flex">
        <div className="card m-2 snippet col">
          <p id={`snippet-text${this.props.id}`}>{this.props.text}</p>
          <Link to={`/edit_note`} onClick={this.onClick}>
            <i className="fa fa-edit"></i>
          </Link>
        </div>
      </div>
    );
  }

  // unnecessary for now: utility method
  showSome = () => {
    return Math.floor((40 * this.state.text.length) / 100);
  };
}
