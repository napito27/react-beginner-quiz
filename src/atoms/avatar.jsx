import React from "react";

// styles
import '../styles/avatar.css'


function Avatar({imageSrc, description}) {
    return ( 
      <div className="avatar" > 
        <img src={imageSrc} alt={description} />      
      </div>
    )
}

export default Avatar;