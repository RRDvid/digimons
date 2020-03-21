
import React from 'react';
import {Card} from '../card/card.component'
import './card-list.css';

export const CardList = props => (
 <div className = 'card-list'>
   {
   props.digimons.map(digimon => (
   <Card key = {digimon.id} digimon = {digimon} />
   )
    )};
 </div>
)