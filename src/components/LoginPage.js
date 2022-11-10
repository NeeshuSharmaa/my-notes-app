import React from "react";
import stylesheet from "../App.css";


// input box that will take up the name of the user
    //label for input
// button-> create new note
    // warnings on clicking button if name hasn't been entered

export default function LoginPage(props){
    return (
        <div className="login-page-container">
            <div className="login-header">
                <h1> Welcome to MY NOTES</h1>
                <img src="logo192.png"></img>
            </div>
            <input type="text" className="input-box" placeholder="Type your name here" onChange={props.onInputChange} onClick={props.onInputClick}></input>
            <button className="create-note-btn" onClick={props.onBtnClick}>Create Notes</button>
            <div className="warning-box">{props.warning}</div>
        </div>
    )
}