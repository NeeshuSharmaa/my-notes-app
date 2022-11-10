import React from "react";
import Note from "./Note.js";

export default function Sidebar(props) {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-first-container">
          <h2 className="sidebar-header">NOTES</h2>
          <button className="add-btn" onClick={props.addNote}>
            Add Note
          </button>
        </div>

        <div className="sidebar-second-container">
          {props.notes.map((note) => (
            <Note note={note} />
          ))}
        </div>
      </div>
    </>
  );
}
