import React from 'react';
import '../css/AUContainer3.css';
import { Team } from './TeamData';
const AUContainer3 = () => {
    return (
        <div className='aucontainer3' >
            <div className='team'>
                <h1 className='team-heading'> THE TEAM</h1>
                <div className='team-collection'>
                    {Team.map((item, index) => {
                        return (
                            <div className="team-member" key={index}>
                                <img src={item.image} className='team-img' alt='Team' />
                                <div className='team-text'>
                                    <h2> {item.name} </h2> <br />
                                    {item.about}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AUContainer3;