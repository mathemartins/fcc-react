import React from 'react';

export default function Content () {
    return (
        <div className='content'>
            <main>
                <p className="name">Martins Chigoziem</p>
                <p className="description">Frontend Developer</p>
                <p className="links">m-chigoziem.website</p>

                <div className="button--group">
                    <button className="email--button">Email</button>
                    <button className="linkedin--button">LinkedIn</button>
                </div>
                <div className="content--info">
                    <div className="first-content">
                        <p className="about">About</p>
                        <p className="about-content">
                            I am a frontend developer with a particular interest in making things simple 
                            and automating daily tasks. I try to keep up with security and best practices, 
                            and am always looking for new things to learn.
                        </p>
                    </div>
                    <div className="second-content">
                        <p className="interest">Interests</p>
                        <p className="interest-content">
                            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                            Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                    </div>
                </div>
            </main>
        </div>
        
    )
}