import React from 'react';
import './Updown.css'

function Updown({message}) {
    return (
        <div className='scrollDown'>
            <p>{message}</p>
        </div>
    );
}

export default Updown;