import React from 'react'
import CardItem from "../CardItem"
import "./ProCards.css"

function ProCards() {
    return (
        <div className="cards">
            <h1>Check out these Projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpeg"
                        text="relaxing on a rock"
                        label="sleep"
                        path="/portfolio"
                        />
                        <CardItem 
                        src="images/img-1.jpeg"
                        text="relax"
                        label="sleep"
                        path="/portfolio"
                        />
                    </ul>
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

export default ProCards
