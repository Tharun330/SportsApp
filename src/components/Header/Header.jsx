import { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { SideBarContext } from '../Store/SidebarContext';
import { motion } from 'framer-motion';


function Header() {

    const { sideBarVisible, setSideBarVisible } = useContext(SideBarContext);



    return (
        <header className='header'>
            <div className='brand'><Link style={{ color: 'black' }} to='/'>Tharun Gudla</Link></div>
            <div className='navOption'>
                <ul>

                    <li><a style={{ color: '#242424', opacity: '.8' }} href='/#projectPage'>Projects</a></li>
                    <li><Link style={{ color: '#242424', opacity: '.8' }} to='/contact' >Contact</Link></li>
                    <li><a style={{ color: '#242424', opacity: '.8' }} href="https://drive.google.com/file/d/1bv1mXsEg2LI3su_OxfPdZM-cMZgW3OEf/view" target="_blank">Resume</a></li>
                </ul>

            </div>
            <motion.div
                className='optionsBar'
                animate={{ rotate: sideBarVisible ? 90 : 0 }}
                transition={{ duration: .3 }}
            >
                <div onClick={() => { !sideBarVisible ? setSideBarVisible(true) : setSideBarVisible(false) }}>
                    {!sideBarVisible ? <i className="fa-solid fa-bars bars"></i> : <motion.i class="fa-solid fa-x bars"></motion.i>}
                </div>
            </motion.div>
        </header>
    );
}

export default Header;