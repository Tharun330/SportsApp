import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header className='header'>
            <div className='brand'>Tharun Gudla</div>
            <div className='navOption'>
                <ul>
                   
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
     );
}

export default Header;