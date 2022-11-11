import React from "react";

export default function Editor(props) {
  return (
    <div className="editor-outer-container">
      <input
        type="text"
        className="editor-search-box"
        placeholder="TITLE"
      ></input>
      <textarea
        rows={20}
        className="editor-note-textarea"
        placeholder="Write your note here..."
      ></textarea>
    </div>
  );
}
