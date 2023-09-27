
import React from 'react';

import '../styles/badge.css';


function Badge({label, color='success'}) { 
  if (color !== "success" || color !== "warning" || color !== "error") 
    
  return <span className={`badge ${color}`}> {label} </span>;
}

export default Badge;
