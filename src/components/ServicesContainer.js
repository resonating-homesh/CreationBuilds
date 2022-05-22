import React from 'react';
import { ServicesData } from './ServicesData';
import '../css/Services.css';

const ServicesContainer = () => {
    return (
        <div>
            {ServicesData.map((item, index) => {

                if (index % 2 === 0) {
                    return (
                        <div className={index % 2 === 0 ? 'services-container-row1' : 'services-container-row2'}>
                            <div className='services-container' >
                                <img alt='service' src={item.image} className="services-image" />
                                <div className="services-text2">
                                    <h className= "heading">{item.name}</h>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className={index % 2 === 0 ? 'services-container-row1' : 'services-container-row2'}>
                            <div className='services-container' >
                                <div className="services-text1">
                                    <h className="heading">{item.name}</h>
                                    <p>{item.description}</p>
                                </div>
                                <img alt='service' src={item.image} className="services-image" />

                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ServicesContainer