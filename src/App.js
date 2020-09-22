import React, { Component } from "react";
import "./styles.css";
import Snippet from "./components/snippet.jsx";
export default class App extends Component {
  state = {
    snippets: [
      { key: 1, text: "Innffksdflfsdfnkn" },
      { key: 2, text: "hbsfjsfkjbskfsdkjfsdkjf" }
    ],
    link: "body"
  };
  render() {
    return (
      <div className="App">
        <div className="card-group">
          {this.state.link === "body" &&
            this.state.snippets.map((snippet) => (
              <Snippet key={snippet.key} text={snippet.text} />
            ))}
        </div>
        {this.state.link === "addNote" && console.log("Add Note")}
        <button className="btn btn-outline-info">
          <i class="fa fa-plus-circle"></i>
        </button>
      </div>
    );
  }
}
