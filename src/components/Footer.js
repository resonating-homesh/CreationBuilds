import React from 'react';
import '../css/Footer.css';
import { BsHeadset } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerColumns">
                <div className="container1">
                    <h2> CREATION </h2>
                    <p>
                        Creation has sufficient in house expertise and also a resource pool of consultant’s associates collaborating to form a pool of information and innovation while synergizing their specialties to offer the services. <br /><br />
                    </p>
                </div>
                <div className="container4">
                    <h2> OUR ADDRESS </h2>
                    <p>
                        636, Dadabari Extension, Kota, Rajasthan 324009
                        <br />
                        ashokjaincreations@gmail.com / 9414188301<br />
                    </p>
                </div>
            </div>
            <div className="bottom-ribbon">
                <div className="left-aligned">
                    <div className="mail">
                    <FiMail /> For Enquiry : <a className='lnks' href='mailto:ashokjaincreations@gmail.com'>  ashokjaincreations@gmail.com </a> 
                    </div>
                    <div className="mail">
                    {/* <button onClick={() => Linking.openURL('mailto:ashokjaincreations@gmail.com')}>Contact Me</button> */}
                    <FiMail /> For Career : <a className='lnks' href='mailto:ashokjaincreations@gmail.com'>  ashokjaincreations@gmail.com </a> 

                    </div>
                </div>
                <div className="right-aligned">
                    <div className="call">
                        <BsHeadset /> Call us:
                        <a href='tel:9414188301' className='lnks'> 9414188301 </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer