import React from 'react';
import logo from './images/airbnb1.svg'

export default function Nav() {
    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="logo" />
        </nav>
    )
}