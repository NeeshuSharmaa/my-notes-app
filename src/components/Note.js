import React from "react";

export default function Note(props) {
  const noteStyle = `note ${props.note.id === props.activeNoteId && "active"}`;

  function activeNoteHandler() {
    props.setActiveNoteId(props.note.id);
  }

  return (
    <div className={noteStyle}>
      <div className="note-title-container">
        <span className="note-title" onClick={activeNoteHandler}>
          {props.note.title}
        </span>
        <button
          className="delete-btn"
          onClick={() => props.onDeleteNote(props.note.id)}
        >
          Delete
        </button>
      </div>
      <p className="note-preview" onClick={activeNoteHandler}>
        {props.note.body && props.note.body.substr(0, 25) + "......"}
      </p>
      <small className="note-date" onClick={activeNoteHandler}>
        Modified date: {props.note.lastModified}
      </small>
    </div>
  );
}
