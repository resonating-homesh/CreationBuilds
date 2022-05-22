import React, { useEffect } from 'react'
import ContactUsImage from '../components/ContactUsImage'
import Form from '../components/Form'
function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <ContactUsImage/>
        <Form/>
    </div>
  )
}
export default ContactUs