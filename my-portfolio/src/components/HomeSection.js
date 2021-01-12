import React from "react";
import "./HomeSection.css";
import "../App.css";

function HomeSection(){
    return(
        <div className="home-container">
            
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Welcome </h1>
            <p>Hello</p>
        </div>
    )
}
export default HomeSection