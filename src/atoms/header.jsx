import React from 'react';

// styles
import '../styles/header.css'

function Header({title}) {
  return (      
    <h1 className="header"> {title} </h1>
  )
}

export default Header; 