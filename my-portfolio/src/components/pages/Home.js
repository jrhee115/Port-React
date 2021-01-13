import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import Cards from "../Cards"
import Footer from "../Footer"

function Home () {
    return(
        <div>
            <HomeSection />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home