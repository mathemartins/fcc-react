import React from 'react';
import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="img-responsive logo" src={logo} alt="" />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}