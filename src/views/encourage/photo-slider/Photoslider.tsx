import React, {useState} from 'react'

import {
    s2r1gm,
    s4r1gm,
    s4r2gm,
    s4r3masters,
    s3r1masters,
    s5r3gm,
    s5r1masters
} from "./images/ExportedImages";

import ImgHolder from "./ImgHolder"; 

import "./styles.scss";

const Photoslider = () => {
 const [numberOfSlide, setNumberOfSlide] = useState(0);

    const sliderArr = [
        <ImgHolder src={s5r3gm}/>,<ImgHolder src={s5r1masters}/>,<ImgHolder src={s4r3masters}/>,<ImgHolder src={s4r2gm}/>,
        <ImgHolder src={s4r1gm}/>,<ImgHolder src={s3r1masters}/>,<ImgHolder src={s2r1gm}/>
        ];

    const goPrev = () => {
    numberOfSlide === 0 ? setNumberOfSlide(-100 * (sliderArr.length -1)) : setNumberOfSlide(numberOfSlide + 100);
        }

    const goNext = () => {
    numberOfSlide === -100 * (sliderArr.length -1) ? setNumberOfSlide(0) : setNumberOfSlide(numberOfSlide - 100);
        }

    return (
        <div className="carousel-container">
        {
            sliderArr.map((item,index) => {
                return (
                    <div key={index} className="slide-image" style={{transform:`translateX(${numberOfSlide}%)`}}>
                        {item}
                    </div>
                )
            })
        }
        <button id="prevBtn" onClick={goPrev}><i className="fas fa-chevron-left" /> LEFT </button>
        <button id="nextBtn" onClick={goNext}><i className="fas fa-chevron-right" />RIGHT</button>
        </div>
    )
}

export default Photoslider;