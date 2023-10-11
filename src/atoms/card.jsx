import React from 'react';

// styles
import '../styles/card.css'

function Card({title, content, children }) {
    return (
      <div className='card counter-box'>
        <h2>{title}</h2>
        <p><em>{content}</em></p>
        { children }
      </div>       
    )
}

export default Card;