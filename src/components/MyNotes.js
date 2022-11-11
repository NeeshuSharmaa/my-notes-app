import React from "react";
import uuid from "react-uuid";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

export default function MyNotes() {
  //login page
  var [userName, setUserName] = React.useState("");
  var [warning, setWarning] = React.useState("");
  var [logged, setLogged] = React.useState(false);
  var [notes, setNotes] = React.useState([]);
  var [activeNoteId, setActiveNoteId] = React.useState(""); //takes id of activenote
  var [hoveredStyle, setHoveredStyle] = React.useState(false);

  function inputChangeHandler(event) {
    setUserName(event.target.value);
  }
  function inputClickHandler() {
    setWarning("");
  }
  function clickHandler() {
    return userName === ""
      ? setWarning("Enter the name first!!")
      : setLogged(true);
  }

  function onAddNote() {
    const newNote = {
      id: uuid(),
      title: "Untitled Title",
      body: "Hi! Start Writing here and make the most out of My Notes. (❁´◡`❁) ",
      lastModified: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  }

  function onDeleteNote(idToDelete) {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  function updateNote(updatedNote) {
    var otherNotes = notes.filter((note) => note.id !== updatedNote.id);

    setNotes([updatedNote, ...otherNotes]);
  }

  return (
    <>
      {!logged ? (
        <Dashboard
          userName={userName}
          logged={logged}
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          hoveredStyle={hoveredStyle}
          setHoveredStyle={setHoveredStyle}
          updateNote={updateNote}
        />
      ) : (
        <LoginPage
          onBtnClick={clickHandler}
          onInputClick={inputClickHandler}
          onInputChange={inputChangeHandler}
          warning={warning}
        />
      )}
      {/* {!logged && (
        <LoginPage
          onBtnClick={clickHandler}
          onInputClick={inputClickHandler}
          onInputChange={inputChangeHandler}
          warning={warning}
        />
      )}
      {logged && (
        <div className="after-logged-page-container">
          <HeroSection userName={userName} logged={logged} />
          <div className="editor-container">
            <Sidebar notes={notes} addNote={onAddNote} />

            <Editor />
          </div>
        </div>
      )} */}
    </>
  );
}
