import React, { useEffect } from "react";

export default function HeroSection(props){
    // var [greeting, setGreeting]=React.useState("");

    const d= new Date();
    const daysArray=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArray=["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${daysArray[d.getDay()]},  ${d.getDate()} ${monthsArray[d.getMonth()]}`;
    var greeting= ""

    // useEffect(() => {
        const time = new Date().getHours() ;
        if(24 <= time < 12){
            // setGreeting("Morning")
            greeting="Morning"
        }
        if(12 <= time <= 17){
            // setGreeting("Afternoon")
            greeting="Afternoon"
        }
        if(17 < time <= 24){
            // setGreeting("Evening")
            greeting="Evening"
        }

    // }, [props.logged])

    return(
        <div className="hero-section">
            <span className="hero-heading">Good {greeting}, {props.userName}!</span>
            <small className="hero-date">{formattedDate}</small>


        </div>
    )
}