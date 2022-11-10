import React from "react";

export default function Main(props) {
  return (
    <div className="main-outer-container">
      <input
        type="text"
        className="main-search-box"
        placeholder="TITLE"
        onChange={props.titleHandler}
      ></input>
      <textarea
        rows={20}
        className="main-note-textarea"
        placeholder="Write your note here..."
      ></textarea>
    </div>
  );
}
