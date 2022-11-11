import React from "react";

export default function Note(props) {
  const noteStyle = `note ${props.note.id === props.activeNote && "active"}`;
  const activeDate = `${props.note.id === props.activeNote && "active-date"}`;
  const hoveredDate = `${props.hoveredStyle && "hovered-date"}`;
  const modifiedDateStyle = `note-date ${activeDate} ${hoveredDate}`;
  return (
    <div
      className={noteStyle}
      onClick={() => props.setActiveNote(props.note.id)}
      onMouseOver={() => props.setHoveredStyle(true)}
      onMouseOut={() => props.setHoveredStyle(false)}
    >
      <div className="note-title-container">
        <span className="note-title" onClick={props.showEditor}>
          {props.note.title}
        </span>
        <button
          className="delete-btn"
          onClick={() => props.onDeleteNote(props.note.id)}
        >
          Delete
        </button>
      </div>
      <p className="note-preview" onClick={props.showEditor}>
        {props.note.body && props.note.body.substr(0, 100) + "......"}
      </p>
      <small className={modifiedDateStyle} onClick={props.showEditor}>
        Modified date: {props.note.lastModified}
      </small>
    </div>
  );
}
