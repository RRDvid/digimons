import React from 'react'
import './card.component.css'

export const Card = props => (
    <div className = 'card-container'>
        <img className = 'img-size'alt = "monster" src={props.digimon.img} />
        <h2> {props.digimon.name} </h2> 
        <p>{props.digimon.level}</p>
    </div>
)
