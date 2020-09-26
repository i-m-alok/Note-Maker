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
    this.textToEdit = null;
    this.textIdToEdit = null;
  }
  // this method is help to add the new note into the state
  addNoteToState = (text) => {
    if (text) {
      let snippets = [...this.state.snippets];
      snippets.push({ text: text });
      let newSnippet = [];
      for (var i in snippets) {
        newSnippet.push({ id: i, text: snippets[i].text });
      }
      console.log(newSnippet);
      this.setState({ snippets: newSnippet });
    }
  };

  // this method is update the edited text
  editNote = (text, id) => {
    let snippets = [...this.state.snippets];
    snippets[id].text = text;
    this.setState({ snippets });
  };

  // this method is to handle the edit button and extract the id and text to edit
  handleEditClick = (text) => {
    this.textToEdit = text;
    let toEditObject = this.state.snippets.filter((snippet) => {
      return snippet.text === this.textToEdit;
    });
    this.textIdToEdit = toEditObject[0].id;
  };

  // render method
  render() {
    return (
      <div className="App p-2">
        {/* Navbar start */}
        <div className="d-flex font-weight-bold bg-dark text-light p-2">
          {/* if the route is other than home page then this route will show the back button on the nav */}
          <Route
            exact
            path={["/add_note", "/edit_note"]}
            render={() => (
              <Link className="btn btn-outline-info" to="/">
                <i className="fa fa-arrow-left"></i>
              </Link>
            )}
          />
          {/* Route end */}
          <h2 className="mx-auto my-auto">Note Maker</h2>
        </div>
        {/* Navbar end */}

        {/* Route for HOME page start here  */}
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <div className="flex-row">
                {this.state.snippets.map((snippet) => (
                  <Snippet
                    key={snippet.id}
                    text={snippet.text}
                    id={snippet.id}
                    handleEditClick={(text) => this.handleEditClick(text)}
                  />
                ))}
              </div>
              <Link
                className="btn btn-outline-info m-2 plus bg-dark"
                to="/add_note"
              >
                <i className="fa fa-plus-circle"></i>
              </Link>
            </React.Fragment>
          )}
        />
        {/* Route for HOME page end here  */}

        {/* Route for ADD NOTE start here */}
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
                title="Add Note"
              />
            </React.Fragment>
          )}
        />
        {/* Route for ADD NOTE end here */}

        {/* Route for EDIT NOTE start here  */}
        <Route
          exact
          path="/edit_note"
          render={({ history }) => (
            <React.Fragment>
              {/* {console.log(this.props.currenttext, "got not value")} */}
              <AddNote
                title="Edit Note"
                textToEdit={this.textToEdit}
                textIdToEdit={this.textIdToEdit}
                editNote={(text) => {
                  this.editNote(text, this.textIdToEdit);
                  history.push("/");
                }}
              />
            </React.Fragment>
          )}
        />
        {/* Route for EDIT NOTE end here  */}
      </div>
    );
  }
}
