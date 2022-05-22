import React, { useEffect } from 'react'
import ProjectContainer from '../components/ProjectContainer'
import ProjectImage from '../components/ProjectImage'
function Project() 
{ 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <ProjectImage/>
        <ProjectContainer/>
    </div>
  )
}
export default Project