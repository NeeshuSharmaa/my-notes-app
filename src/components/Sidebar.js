import React from "react";
import stylesheet from "../App.css"

export default function Sidebar(){
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-first-container">
                    <h2 className="sidebar-header">NOTES</h2>
                    <button className="add-btn">Add Note</button>
                </div>
                
                <div className="sidebar-second-container">
                    <div className="note">
                        <div className="note-title-container">
                            <span className="note-title">TITLE</span>
                            <button className="delete-btn">Delete</button>
                        </div>
                        <p className="note-preview">Note Preview</p>
                        <small className="note-date">Modified [date]</small>

                    </div>
                </div>
            </div>
        </>
    )
}