import React from 'react';
import ImgFuji from './images/mf.png'

export default function TravelSpots(props) {
    console.log(props);
    return (
        <>
            <div className="spot">
                <img src={ImgFuji} alt="some-location" className="spot-image" />

                <div className="spot-content">
                    <span className="spot-locale">
                        <text className="spot-country">{props.location} </text>
                        <text className="spot-google-maps">View On Google Maps</text>
                    </span>

                    <h2 className="spot-title">{props.title}</h2>
                    <p className="spot-date-span">12, Jan 2021 - 24, Jan 2022</p>
                    <text className="spot-description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                        (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, 
                        for both Japanese and foreign tourists.
                    </text>
                </div>
            </div>
            
        </>
    )
}