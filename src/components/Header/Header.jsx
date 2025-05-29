import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header className='header'>
            <div className='brand'><Link style={{color:'black'}}to='/'>Tharun Gudla</Link></div>
            <div className='navOption'>
                <ul>
                   
                    <li><a style={{color:'#242424', opacity:'.8'}}href='/#projectPage'>Projects</a></li>
                    <li><Link style={{color:'#242424', opacity:'.8'}} to='/contact' >Contact</Link></li>
                    <li><a style={{color:'#242424', opacity:'.8'}} href="https://drive.google.com/file/d/1bv1mXsEg2LI3su_OxfPdZM-cMZgW3OEf/view" target="_blank">Resume</a></li>
                </ul>
            </div>
        </header>
     );
}

export default Header;