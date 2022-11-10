import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import HeroSection from "./HeroSection";

//rfce: abbreviation
function Dashboard(props) {
  return (
    <div className="after-logged-page-container">
      <HeroSection userName={props.userName} logged={props.logged} />
      <div className="editor-container">
        <Sidebar notes={props.notes} addNote={props.onAddNote} />
        <Main noteTitle={props.noteTitle} titleHandler={props.titleHandler} />
      </div>
    </div>
  );
}

export default Dashboard;
