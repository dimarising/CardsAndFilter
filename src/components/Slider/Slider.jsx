import React, { useState } from "react";
import './Slider.scss'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Slider = () => {
  
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        '/img/slider/photo-1.jpeg',
        '/img/slider/photo-2.webp',
        '/img/slider/photo-3.webp'

    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };
  
    return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="slider-1" />
            <img src={data[1]} alt="slider-2" />
            <img src={data[2]} alt="slider-3" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}> 
                <WestOutlinedIcon/> 
             </div>

            <div className="icon" onClick={nextSlide}> 
                <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider