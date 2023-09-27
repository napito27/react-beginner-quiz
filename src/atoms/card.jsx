
import React from 'react';

import '../styles/card.css'

function Card({title, content, children }) {
    return (
      <div className='card'>
        <h2>{title}</h2>
        <p><em>{content}</em></p>
        <div>{ children }</div>
      </div>       
    )
}

export default Card;