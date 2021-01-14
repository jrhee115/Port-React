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
                                    <img src={slide.image} alt={slide.alt} />
                                    <div className="image-content">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.label}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })};
                <div className="slider-button">
                    <div className="prev-arrow"><i class="fas fa-angle-left"></i></div>
                    <div className="next-arrow"><i class="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Images
