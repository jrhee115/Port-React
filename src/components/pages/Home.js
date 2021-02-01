import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import Cards from "../HomeCards/Cards"
import Footer from "../Footer/Footer"

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