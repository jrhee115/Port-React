import React from "react";
import "../../App.css"
import Footer from "../Footer/Footer"
import AboutCards from "../AboutCards/AboutCards"
import HomeSection from "../AboutSection"

function About () {
    return(
        <div>
            <HomeSection />
            <AboutCards />
            <Footer />
        </div>
    );
}

export default About