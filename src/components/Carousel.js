import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import '../css/Carousel.css';



const Carousel = ({slides, statement}) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const autoScroll = true;
let slideInterval;
let intervalTime = 6000;

const nextSlide = () =>
{
    setCurrent(current === length -1 ? 0 : current + 1)
};

const prevSlide = () =>
{
    setCurrent(current === 0 ? length -1 : current - 1 )
}

function auto()
{
    slideInterval = setInterval(nextSlide, intervalTime)
}

useEffect(()=>
{
    if (autoScroll)
    {
        auto();
    }
    return () => clearInterval(slideInterval);
},[current]);

// console.log(current);

if (!Array.isArray(slides) || slides.length <= 0)
{
    return null;
}

  return (
    <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {slides.map((slide, index) =>
        {
            return (
                
                <div className={index === current ? 'slide active' : 'slide'} key= {index}>
                    { index === current && (
                        <img src={slide.image} alt="travel" className='image'/>
                    )}
                </div>
            )
               
            
        })}
        <h className='home-text'>
        {statement}
        </h>
    </section>
  )
}

export default Carousel