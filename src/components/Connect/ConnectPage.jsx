import React, { useEffect, useRef } from 'react';
import '../Connect/ConnectPage.css';
import { motion, useAnimation, useInView } from 'framer-motion';

function ConnectPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])

    return (
        <div className='connectPage'>

            <div ref={ref}>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: .70 }}>


                    <p>Get In Touch</p>
                </motion.div>


                <motion.div className='input'
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: .25 }}>

                    <a href='mailto:tharunteja.gudla@gmail.com'><span id="mail">tharunteja.gudla@gmail.com</span></a>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: .25 }}>
                    <a href='https://drive.google.com/file/d/1bv1mXsEg2LI3su_OxfPdZM-cMZgW3OEf/view' target="_blank"><i class="fa-solid fa-file-pdf"></i><span style={{ color: '#242424' }}>Resume_TharunGudla.pdf</span> </a>
                </motion.div>
            </div>


            <div className='connectLinks'>
                <div className="linksContainer">
                    <a href="https://www.linkedin.com/in/gudla-tharun-sri-teja/" target="_blank"><i
                        className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/Tharun330" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/g_tharun/" target="_blank"> <i class="fa-brands fa-instagram"></i></a>



                    {/* <a href='https://drive.google.com/file/d/1BGLiOv4DL9RYRKVCIItmNono91JChmrV/view' target='_blank'><button>Resume</button></a> */}
                </div>

            </div>



        </div>
    );
}

export default ConnectPage;