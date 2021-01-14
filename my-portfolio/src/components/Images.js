import React from 'react'
import "./Images.css"



const Images = ({slides}) => {
    return (
        <div className="image-section"> 
            <div className="image-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div className="image-slide" key={index}>
                            <div className="image-slider">
                                <div className="image-photo">
                                    <div className="image-content">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })};
            </div>
        </div>
    )
}

export default Images
