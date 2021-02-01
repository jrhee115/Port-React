import React from "react";
import "./HomeSection.css";
import "../App.css";
import VideoTwo from "../videos/video-2.mp4"

function HomeSection(){
    return(
        <div className="home-container">
            <video src= {VideoTwo} autoPlay loop muted />
            <h1>Welcome </h1>
            <p></p>
        </div>
    )
}
export default HomeSection