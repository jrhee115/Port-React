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
                        src="images/calendar.png"
                        text="This was my first project created with my group,
                        you are able to look through a calendar with a beautiful background
                        screnary of space. Your also able to write down any upcoming events 
                        as well as keep track of upcoming sport games. To see more copy 
                        this url: https://github.com/rzelazny/Look4wardToIt.git"
                        label="Look4wardToIt"
                        path="/project"
                        />
                        <CardItem 
                        src="images/casino.png"
                        text="Welcome to the Social Underground, a place where you can 
                        meet with friends and play some games in a virtual casino. This is 
                        an application built so that users do not need multiple windows open 
                        to play a game and chat. The user will be able to be able to hangout 
                        with their friends while playing a fun game of blackjack. To see more copy 
                        this url: https://github.com/rzelazny/social-underground.git"
                        label="Social Underground"
                        path="/project"
                        />
                        <CardItem 
                        src="images/fitness.png"
                        text="As a user, I want to be able to view create and track daily workouts. 
                        I want to be able to log multiple exercises in a workout on a given day. 
                        Im also able to track the name, type, weight, sets, reps, and duration 
                        of exercise. If the exercise is a cardio exercise, Im able to track my 
                        distance traveled. To see more copy this url: 
                        https://github.com/jrhee115/WorkoutTracker.git"
                        label="Fitness Tracker"
                        path="/project"
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
