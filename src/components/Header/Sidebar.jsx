import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { motion } from 'framer-motion';
import { SideBarContext } from '../Store/SidebarContext';


function SideBar() {

    const { setSideBarVisible } = useContext(SideBarContext);


    return (
        <motion.div
            className='sidebar '
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .3 }}
            exit={{ opacity: 0, y: -30 }}
        >
            <div className="">
                <ul>

                    <li><a style={{ color: '#242424', opacity: '.8' }} onClick={()=>setSideBarVisible(false)} href='/#projectPage'>Projects</a></li>
                    <li><Link style={{ color: '#242424', opacity: '.8' }} onClick={()=>setSideBarVisible(false)} to='/contact' >Contact</Link></li>
                    <li><a style={{ color: '#242424', opacity: '.8' }} onClick={()=>setSideBarVisible(false)} href="https://drive.google.com/file/d/1bv1mXsEg2LI3su_OxfPdZM-cMZgW3OEf/view" target="_blank">Resume</a></li>
                </ul>

            </div>
        </motion.div>
    );
}

export default SideBar;