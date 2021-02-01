import React from "react";
import "../../App.css"
import Footer from "../Footer/Footer"
import AboutCards from "../AboutCards/AboutCards"
import HomeSection from "../AboutSection"
// import SocialMedia from "../SocialMedia"

function About () {
    return(
        <div>
            <HomeSection />
            <AboutCards />
            {/* <SocialMedia /> */}
            <Footer />
        </div>
    );
}

export default About