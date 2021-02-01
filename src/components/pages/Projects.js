import React from "react";
import "../../App.css"
import Footer from "../Footer/Footer"
import ProCards from "../ProjectCards/ProCards"
import ProjectSection from "../ProjectSection";

function Projects(){
    return(

            <div>
                <ProjectSection />
                <ProCards />
                <Footer />
            </div>
        );
    }
export default Projects