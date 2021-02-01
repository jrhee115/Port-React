import React from "react";
import "./ProjectSection.css";
import "../App.css";
import VideoOne from "../videos/video-1.mp4"

function ProjectSection(){
    return(
        <div className="home-container">
            <video src= {VideoOne} autoPlay loop muted />
            <h1>Projects </h1>
            <p></p>
        </div>
    )
}
export default ProjectSection