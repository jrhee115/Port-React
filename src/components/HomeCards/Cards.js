import React from 'react'
import CardItem from "../CardItem"
import "./Cards.css"
import RelaxImg from "../../Images/img-1.jpeg"
import NatureImg from "../../Images/img-2.jpg"
import MuseumImg from "../../Images/img-6.jpg"
import BeautyImg from "../../Images/img-13.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these photos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {RelaxImg}
                        text="Take a deep breath.. Inhale peace. Exhale happiness."
                        label="Relax"
                        path="/portfolio"
                        />
                        <CardItem 
                        src= {NatureImg}
                        text="No matter how close you are to the edge, stand straight and keep moving forward."
                        label="Nature"
                        path="/portfolio"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= {MuseumImg}
                        text="You can have anything you want in life if you dress for it. "
                        label="Museum"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src= {BeautyImg}
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
