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
    this.props.addNoteToState(this.state.text);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div className="p-2">
        <h3 className="mt-5">Add Note</h3>
        <form
          className="form-group"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <textarea
            value={this.state.text}
            className="form-control"
            name="text"
            rows="5"
            id="comment"
            onChange={(event) => this.handleChange(event)}
          ></textarea>
          <button className="btn btn-outline-info m-2" to="/">
            <i className="fa fa-check-circle"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
