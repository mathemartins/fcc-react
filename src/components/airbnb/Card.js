import React from 'react';

export default function Card (props) {
    console.log(props)
    // Handle conditional rendering
    // {props.data == true && <div className="some-name">Display Data</div>}
    return (
        <div className="card">

            <img src={props.img} className="card-image" alt="" />
            <div className="card-rating">
                <span className="ratings">{props.ratings} ratings</span>
            </div>
            <p className="content">{props.title}</p>
            <p className="user">From ${props.price} / person</p>
        </div>
    )
}