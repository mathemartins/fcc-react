import React from 'react';

export default function MainComponent(){
    return (
        <main className="main-content">
            <h1 className="main-content--header">Fun facts about React</h1>
            <ul className="main-content--ul--items">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise applications, including mobile applications</li>
            </ul>
        </main>
    )
}