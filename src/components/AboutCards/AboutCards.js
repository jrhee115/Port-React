import React from 'react'
import CardItem from "../CardItem"
import SocialMedia from '../SocialMedia'
import "./AboutCards.css"
import MeImg from "../../Images/img-20.jpg"
import ContactImg from "../../Images/img-22.jpeg"


function Cards() {
    return (
        <div className="cards">
            <h1>This is me!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem 
                        src={MeImg}
                        text="
                        Front end web developer leveraging background in psychology to provide unique perspectives on how end-users interact with websites and software platforms. 
                        Earned a certificate in Web Development from the Rutgers University Coding Boot Camp. 
                        My background is diverse. Growing up in the northeast coast, and going to school for Biology and Chemistry, working as an Admission
                        counselor at Rutgers University - Camden, and now pursuing the future tech.
                        Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. 
                        Strengths in creativity, teamwork, and executing projects from ideas to products."
                        label="Justin Rhee"
                        path="/portfolio"
                        />
                    </div>
                    <div className="cards__items">
                    <CardItem 
                        src= {ContactImg}
                        text="Phone: (201) 566-1340
                        Email: justinrhee514@gmail.com"
                        label="Contact Me"
                        />
                    </div>
                    <div className="cards__items">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
