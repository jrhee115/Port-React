import React from "react";
import "./Homepage.css";
import "../App.css";


function Homepage(){
    return(
        <div className="home-container">
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1>HI</h1>
            <p>Hello</p>
        </div>
    )
}
export default Homepage