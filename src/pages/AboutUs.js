import React, { useEffect } from 'react'
import AboutUsContainer from '../components/AboutUsContainer'
import AUContainer2 from '../components/AUContainer2'
import AUContainer3 from '../components/AUContainer3'
import { AboutUsText } from '../components/AboutUsText'

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
    <AboutUsText/>
    <AboutUsContainer/>
        <AUContainer2/>
        <AUContainer3/>
    </div>
  )
}
export default AboutUs