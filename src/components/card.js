import React from 'react';

function Card(props) {
    return (
            <img className="card-img" src={process.env.PUBLIC_URL + props.src} id={props.id} onClick={(e)=>props.clickHandler(props.id, e)} />
            )
        }
        
export default Card