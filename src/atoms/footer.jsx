
import React from "react";

import '../styles/footer.css'

function Footer({content, name}) {
    return (      
      <p> {content}<span className="name" >{name}</span> </p>
    )
}

export default Footer; 