import React from "react";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import HeroSection from "./HeroSection";

//rfce: abbreviation
function Dashboard(props) {
  return (
    <div className="after-logged-page-container">
      <HeroSection userName={props.userName} logged={props.logged} />
      <div className="editor-sidebar-container">
        <Sidebar
          notes={props.notes}
          addNote={props.onAddNote}
          showEditor={props.EditorHandler}
          onDeleteNote={props.onDeleteNote}
          activeNote={props.activeNote}
          setActiveNote={props.setActiveNote}
          hoveredStyle={props.hoveredStyle}
          setHoveredStyle={props.setHoveredStyle}
        />
        {props.showEditorState && <Editor />}
      </div>
    </div>
  );
}

export default Dashboard;
