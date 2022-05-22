import React, { useEffect } from 'react'
import Carousel from '../components/Carousel';
import { ServicesSliderData } from '../components/ServicesSliderData';
import ServicesContainer from '../components/ServicesContainer';
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Carousel slides={ServicesSliderData} statement={`Creation has sufficient in house expertise and also a resource pool of consultant’s associates collaborating to form a pool of information and innovation while synergizing their specialties to offer the services listed below.`}  />
        <ServicesContainer/>
    </div>
  )
}
export default Services