import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import { SliderData } from '../components/SliderData'
function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Carousel slides={SliderData} statement={`CREATION is a Professional Practice Firm with Professional Architects and Designers
        motivated to revive the roots of architecture in the present day .Based in Kota, Rajasthan offering services all over India.`} />
    </div>
  )
}
export default Homepage