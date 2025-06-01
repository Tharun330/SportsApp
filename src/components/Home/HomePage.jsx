

import PersonImg from '../PersonContent/PersonImg'
import PersonIntro from '../PersonContent/PersonIntro'
import Updown from '../UpdownAnimation/Updown'
import SkillsPage from '../Skills/SkillPage'
import ProjectPage from '../Project/ProjectPage'
import ConnectPage from '../Connect/ConnectPage'
import './HomePage.css'
import SideBar from '../Header/Sidebar'
import { useContext, useState } from 'react'
import { SideBarContext } from '../Store/SidebarContext'
import { AnimatePresence } from 'framer-motion'


function HomePage() {

    const { sideBarVisible } = useContext(SideBarContext);

    return (
        <>
            <AnimatePresence>
                {sideBarVisible && <SideBar />}
            </AnimatePresence>
            <div  className='personContent container-fluid'>
                <PersonImg />
                <PersonIntro />
            </div>
            <Updown message={'Scroll Down to see more 😁!'} />
            <SkillsPage />
            <ProjectPage />
            <ConnectPage />



        </>
    );
}

export default HomePage;