import React from "react";

export default function Editor(props) {
  // const activeNote = ()=> props.notes.find((note) => note.id === props.activeNoteId);
  const activeNote = props.notes.find((note) => note.id === props.activeNoteId);
  console.log(activeNote);
  const onChangeHandler = (keyToBeUpdated, value) => {
    props.updateNote({
      ...activeNote,
      [keyToBeUpdated]: value,
      lastModified: new Date().toLocaleString(),
    });
  };
  return (
    <div className="editor-outer-container">
      <input
        type="text"
        id="title"
        // defaultValue={activeNote().title}
        defaultValue={Date.now()}
        className="editor-search-box"
        onChange={(event) => onChangeHandler("title", event.target.value)}
        placeholder="NOTE TITLE"
      ></input>
      <textarea
        rows={20}
        id="body"
        // defaultValue={activeNote().body} //another way to define below value
        defaultValue={activeNote.body}
        className="editor-note-textarea"
        onChange={(event) => onChangeHandler("body", event.target.value)}
        placeholder="Write your note here..."
      ></textarea>
    </div>
  );
}
