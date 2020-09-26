import React, { Component } from "react";
// import React,{ Component } from "react-dom";
// import { Link } from "react-router-dom";
class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let currentText = document.getElementById("editable").innerHTML;
    if (this.props.title === "Add Note") {
      this.props.addNoteToState(currentText);
    } else {
      this.props.editNote(currentText);
    }
  };

  render() {
    return (
      <div className="p-2">
        <h3 className="mt-5">{this.props.title}</h3>
        <form
          className="form-group"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <p
            suppressContentEditableWarning
            contentEditable
            className="form-control"
            id="editable"
          >
            {this.props.textToEdit}
          </p>
          <button className="btn btn-outline-info m-2 bg-dark p-3" to="/">
            <i className="fa fa-check-circle"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
