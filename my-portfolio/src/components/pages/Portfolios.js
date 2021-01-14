import React from "react";
import "../../App.css"
import Images from "../Images"

export default function Portfolios(){
    return (
        
        <div>
            <h1 className="Portfolios">PORTFOLIOS</h1>
            <Images slides={ImageData}/>
        </div>
    )
}