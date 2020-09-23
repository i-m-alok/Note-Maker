import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./styles.css";
import Snippet from "./components/snippet.jsx";
import AddNote from "./components/addnote.jsx";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snippets: []
    };
  }

  addNoteToState = (text) => {
    let snippets = [...this.state.snippets];
    snippets.push({ key: snippets.length, text: text });
    console.log(snippets);
    this.setState({ snippets });
  };
  render() {
    return (
      <div className="App p-2">
        <div className="d-flex font-weight-bold bg-dark text-light p-2">
          <Route
            exact
            path="/add_note"
            render={() => (
              <Link className="btn btn-outline-info" to="/">
                <i className="fa fa-arrow-left"></i>
              </Link>
            )}
          />
          <h2 className="mx-auto my-auto">Note Maker</h2>
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <div className="flex-row">
                {this.state.snippets.map((snippet) => (
                  <Snippet key={snippet.key} text={snippet.text} />
                ))}
              </div>
              <Link className="btn btn-outline-info m-2" to="/add_note">
                <i className="fa fa-plus-circle"></i>
              </Link>
            </React.Fragment>
          )}
        />
        <Route
          exact
          path="/add_note"
          render={({ history }) => (
            <React.Fragment>
              <AddNote
                addNoteToState={(text) => {
                  this.addNoteToState(text);
                  history.push("/");
                }}
              />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}
