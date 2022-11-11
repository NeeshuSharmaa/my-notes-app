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
          onDeleteNote={props.onDeleteNote}
          activeNoteId={props.activeNoteId}
          setActiveNoteId={props.setActiveNoteId}
          hoveredStyle={props.hoveredStyle}
          setHoveredStyle={props.setHoveredStyle}
        />
        {props.activeNoteId && (
          <Editor
            notes={props.notes}
            activeNoteId={props.activeNoteId}
            updateNote={props.updateNote}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
