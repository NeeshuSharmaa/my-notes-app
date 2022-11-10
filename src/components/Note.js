import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <div className="note-title-container">
        <span className="note-title">{props.note.title}</span>
        <button className="delete-btn">Delete</button>
      </div>
      <p className="note-preview">Note Preview</p>
      <small className="note-date">
        Modified date: {props.note.lastModified}
      </small>
    </div>
  );
}
