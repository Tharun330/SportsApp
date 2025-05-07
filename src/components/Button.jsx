import React from 'react';
import './Button.css'

function Button({title, onSelect}) {

    
    return ( 
        <button className='button' name={title} onClick={onSelect}>{title}</button>
     );
}

export default Button;