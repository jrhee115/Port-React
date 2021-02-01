import React from 'react'
import CardItem from "../CardItem"
import "./PortCards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these photos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Dream without fear, love without LIMITS"
                        label="Wedding"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src="images/img-21.jpeg"
                        text="Somtimes its OK if the only thing you did today was breathe"
                        label="Comfort"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-10.jpg"
                        text="A smooth sea never made a skillful sailor"
                        label="Atlantis"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src="images/img- 19.jpg"
                        text="Not all homes are closed, some are welcoming"
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
