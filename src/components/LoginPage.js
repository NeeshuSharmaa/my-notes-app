import React from "react";
import stylesheet from "../App.css";


// input box that will take up the name of the user
    //label for input
// button-> create new note
    // warnings on clicking button if name hasn't been entered

export default function LoginPage(){
    var [userName, setUserName]=React.useState("");
    var [warning, setWarning]=React.useState("");

    function changeHandler(event){
        setUserName(event.target.value);
    }
    function inputClickHandler(){
        setWarning("");

    }
    function clickHandler(){
        return (
            userName===""? setWarning("Enter the name first!!"):""
        )
    }
    return (
        <div className="login-page-container">
            <h1> Welcome to MY NOTES</h1>
            <input type="text" className="input-box" placeholder="Type your name here" onChange={changeHandler} onClick={inputClickHandler}></input>
            <button className="create-note-btn" onClick={clickHandler}>Create Notes</button>
            <div className="warning-box">{warning}</div>
        </div>
    )
}