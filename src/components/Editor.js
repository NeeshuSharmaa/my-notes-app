import React from "react";
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar"
import Main from "./Main"
import HeroSection from "./HeroSection"

export default function Editor(){
    //login page essentials (states & functions)
    var [userName, setUserName]=React.useState("");
    var [warning, setWarning]=React.useState("");
    var [logged, setLogged]=React.useState(false);

    function inputChangeHandler(event){
        setUserName(event.target.value);
    }
    function inputClickHandler(){
        setWarning("");

    }
    function clickHandler(){
        return (
            userName===""? setWarning("Enter the name first!!"):setLogged(true)
        )
    }
    return (
        <>
            {!logged && 
            <LoginPage 
                onBtnClick={clickHandler} 
                onInputClick={inputClickHandler} 
                onInputChange={inputChangeHandler} 
                warning={warning}
            />
            }
            {logged && <div className="after-logged-page-container">
                <HeroSection userName={userName} logged={logged}/>
                <div className="editor-container">
                <Sidebar />
                </div>
            </div>}
        </>
        
    )
}