import React from "react";
import "./AboutSection.css";
import "../App.css";
import VideoThree from "../videos/video-3.mp4"

function AboutSection(){
    return(
        <div className="home-container">
            <video src= {VideoThree} autoPlay loop muted />
            <h1>About </h1>
            <p></p>
        </div>
    )
}
export default AboutSection