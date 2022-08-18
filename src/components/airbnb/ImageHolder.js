import React from 'react';
import heroImage from './images/GroupImage.png';

export default function ImageHolder() {
    return (
        <>
            <div className="image-container">
                <img src={heroImage} className="img-holder" alt="img-holder-bg" />
            </div>
            <div className="hero">
                <div className="hero-details">
                    <h2 className="hero-title">
                        Online Experience
                    </h2>
                    <p className="hero-content">
                        Join unique interactive activities led by one-of-a-kind hosts—all without 
                        leaving home.
                    </p>
                </div>
            </div>
        </>
    )
}