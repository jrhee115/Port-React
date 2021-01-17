import React from 'react'
import CardItem from "../CardItem"
import SocialMedia from '../SocialMedia'
import "./AboutCards.css"


function Cards() {
    return (
        <div className="cards">
            <h1>This is me!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem 
                        src="images/img-20.jpg"
                        text="My name is Justin and I graduated Rutgers with a degree in Biology and Chemistry. 
                        After doing research at Weill Cornell Medicial College and working as an admission counselor at Rutgers Univeristy - Camden, 
                        I realized my true passion was coding and photography, this got me thinking about joining a bootcamp. 
                        While working at Rutgers I came across a bootcamp program thats under the Rutgers program so as an alumni I decided to join this bootcamp."
                        label="Justin Rhee"
                        path="/portfolio"
                        />
                    </div>
                    <div className="cards__items">
                        <SocialMedia />

                    </div>
                    {/* <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpeg"
                        text="relaxing on a rock"
                        label="sleep"
                        path="/portfolio"
                        />
                        <br></br>
                        <CardItem 
                        src="images/img-1.jpeg"
                        text="relax"
                        label="sleep"
                        path="/portfolio"
                        />
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Cards
