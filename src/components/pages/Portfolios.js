import React from "react";
import "../../App.css"
import Images from "../Images"
import ImageData from "../ImageData"
import CardsPort from "../PortCards/PortCards"
import Footer from "../Footer/Footer"

export default function Portfolios(){
    return (
        
        <div>
            <h1 className="Portfolios">PORTFOLIOS</h1>
            <Images slides={ImageData}/>
            <CardsPort />
            <Footer />
        </div>
    )
}