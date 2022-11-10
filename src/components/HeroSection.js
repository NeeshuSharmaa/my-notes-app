import React, { useEffect } from "react";

export default function HeroSection(props){
    var [greeting, setGreeting]=React.useState("")

    useEffect(() => {
        const time = new Date().getHours() ;
        if(24 <= time < 12){
            setGreeting("Morning")
        }
        if(12 <= time <= 17){
            setGreeting("Afternoon")
        }
        if(17 < time <= 24){
            setGreeting("Evening")
        }

    }, [props.logged])

    return(
        <div className="hero-section">
            <span className="hero-heading">Good {greeting}, {props.userName}!</span>


        </div>
    )
}