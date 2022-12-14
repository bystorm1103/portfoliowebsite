import React from "react";
import { useState } from "react";
import LeftArrow from "./arrowleft.png";
import RightArrow from "./arrowright.png";

import "./carousel.css";

const Carousel = ({ slides }) => {
    const [currentIndex, setIndex] = useState(0)

    if(currentIndex > slides.length - 1)
    {
        setIndex(0)
    }
    else if(currentIndex < 0)
    {
        setIndex(slides.length - 1)
    }

    return (
        <div className="carousel__container">
            <button className="carousel__button">
                <img onClick={() => {
                    var carElem = document.querySelector(".carousel__item");
                    carElem.classList.add("elementToFadeInAndOut");
                    setTimeout(function(){carElem.classList.remove("elementToFadeInAndOut");}, 1500);
                    setIndex((currentIndex) => currentIndex - 1)
                }} className="carousel__button-img" src={LeftArrow} alt="<" width="40" height="40"></img>
            </button>
                {(slides[currentIndex] != undefined) ? slides[currentIndex]() : slides[0]()}
            <button className="carousel__button">
                <img onClick={() => 
                    {
                        var carElem = document.querySelector(".carousel__item");
                        carElem.classList.add("elementToFadeInAndOut");
                        setTimeout(function(){carElem.classList.remove("elementToFadeInAndOut");}, 1500);
                        setIndex((currentIndex) => currentIndex + 1)
                    }} className="carousel__button-img" src={RightArrow} alt=">" width="40" height="40"></img>
            </button>
        </div>
    )
}

export default Carousel 