import { useEffect, useRef } from 'react';
import './Contact.css'
import LinkBox from './LinkBox';
import ConnectPage from '../Connect/ConnectPage';
import { motion, useAnimation, useInView } from 'framer-motion';
import About from './About';
import { useContext, useState } from 'react'
import { SideBarContext } from '../Store/SidebarContext'
import { AnimatePresence } from 'framer-motion';
import SideBar from '../Header/Sidebar';

function ContactPage() {
    const { sideBarVisible } = useContext(SideBarContext);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])
    return (
        <>
            <AnimatePresence>
                {sideBarVisible && <SideBar />}
            </AnimatePresence>


            <div ref={ref} className='contactPage'>

                <div className='headingSection'>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: .20 }}>
                        Keep in touch with me 😁</motion.h1>
                    <motion.p variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: .25 }}>Always available for your inquries👨‍💻</motion.p>
                </div>
                <div>

                </div>
                <div className='contactLinks'>
                    <LinkBox message="Mail me :)" link={'mailto:tharunteja.gudla@gmail.com'} content={'tharunteja.gudla@gmail.com'} />
                    <LinkBox message="Connect me via LinkedIn" link={'https://www.linkedin.com/in/gudla-tharun-sri-teja/'} content={'linkedin.com/in/gudla-tharun-sri-teja/'} />
                    <LinkBox message="Socialify :)" link={'mailto:tharunteja.gudla@gmail.com'} content={<div className='connectLinks'>
                        <div className="linksContainer">
                            <a href="https://www.linkedin.com/in/gudla-tharun-sri-teja/" target="_blank"><i
                                className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/Tharun330" target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/g_tharun/" target="_blank"> <i className="fa-brands fa-instagram"></i></a>



                            {/* <a href='https://drive.google.com/file/d/1BGLiOv4DL9RYRKVCIItmNono91JChmrV/view' target='_blank'><button>Resume</button></a> */}
                        </div>

                    </div>} />

                </div>

                <div className='aboutSection'>
                    <About />
                </div>
                <ConnectPage />
            </div >

        </>

    );
}

export default ContactPage;
