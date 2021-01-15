import React from 'react'
import CardItem from "../CardItem"
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these photos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpeg"
                        text="Take a deep breath.. Inhale peace. Exhale happiness."
                        label="Relax"
                        path="/portfolio"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="No matter how close you are to the edge, stand straight and keep moving forward."
                        label="Nature"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-6.jpg"
                        text="You can have anything you want in life if you dress for it. "
                        label="Museum"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src="images/img-13.jpg"
                        text="The flower that follows the sun does so even in cloudy days."
                        label="Beauty"
                        path="/portfolio"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
