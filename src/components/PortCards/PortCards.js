import React from 'react'
import CardItem from "../CardItem"
import "./PortCards.css"
import WeddingImg from "../../Images/img-8.jpg"
import ComfortImg from "../../Images/img-21.jpeg"
import AtlantisImg from "../../Images/img-10.jpg"
import HomeImg from "../../Images/img- 19.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these photos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {WeddingImg}
                        text1="Dream without fear, love without LIMITS"
                        label="Wedding"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src= {ComfortImg}
                        text1="Sometimes its OK if the only thing you did today was breathe"
                        label="Comfort"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {AtlantisImg}
                        text1="A smooth sea never made a skillful sailor"
                        label="Atlantis"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src= {HomeImg}
                        text1="Not all homes are closed, some are welcoming"
                        label="Home"
                        path="/portfolio"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
