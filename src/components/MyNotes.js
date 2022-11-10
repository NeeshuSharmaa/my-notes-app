import React from "react";
import uuid from "react-uuid";
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar";
import Main from "./Main";
import HeroSection from "./HeroSection";
import Dashboard from "./Dashboard";

export default function MyNotes() {
  //login page
  var [userName, setUserName] = React.useState("");
  var [warning, setWarning] = React.useState("");
  var [logged, setLogged] = React.useState(false);

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

  // main page
  var [title, setTitle] = React.useState("Unititled Title");
  var [notes, setNotes] = React.useState([
    {
      id: 1,
      title: title,
      description: "",
      lastModified: new Date().toLocaleString(),
    },
  ]);
  function onAddNote() {
    const newNote = {
      id: uuid(),
      title: "",
      description: "",
      lastModified: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  }
  function titleHandler(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      {logged ? (
        <Dashboard
          userName={userName}
          logged={logged}
          notes={notes}
          onAddNote={onAddNote}
          noteTitle={title}
          titleHandler={titleHandler}
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

            <Main />
          </div>
        </div>
      )} */}
    </>
  );
}
