import React, { useEffect, useState, useRef } from 'react'
import "./Images.css"



const Images = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        };
        timeout.current = setTimeout(nextSlide, 4000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]
    );

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className="image-section">
            <div className="image-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div className="image-slide" key={index}>
                            {index === current && (
                                <div className="image-slider">
                                    <div className="image-photo">
                                        <img src={slide.image} alt={slide.alt} />
                                        <div className="image-content">
                                            <h1>{slide.title}</h1>
                                            <p>{slide.label}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                {/* <div className="slider-button">
                    <div className="prev-arrow">
                        <i class="fas fa-angle-left"></i>
                        <button onClick={prevSlide} />
                    </div>
                    <div className="next-arrow">
                        <i class="fas fa-angle-right"></i>
                        <button onClick={nextSlide} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Images
