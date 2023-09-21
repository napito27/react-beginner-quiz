
import React from 'react';

import '../styles/badge.css';


function Badge({label, color}) { 
  if (color !== "success" || color !== "warning" || color !== "error") {
    color = "success";
  } 
    return <span className={`badge ${color}`} >{label}</span>;
}

export default Badge;
