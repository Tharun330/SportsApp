import { useRef, useEffect } from 'react';
import "./Project.css"
import { motion, useInView, useAnimation } from 'framer-motion';

function Project({ img1, img2, direction, name, number, description }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])
    return (
        <div ref={ref} className='projectCard' style={{ flexDirection: direction }}>
            <motion.div className='projectPic'
                variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: .70 }}>
                <div className='projectName'>
                    <p>{number}</p>
                    <p>{name}</p>
                </div>
                <img src={img1} />
                {img2 && <img style={{ height: "250px", width: "180px" }} src={img2} />}
            </motion.div>
            <motion.div className='projectDescription'
                variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: .70 }}>
                <p>{description}</p>

                <a href='#'><p> Learn more about project<i style={{ color: 'white', fontSize: '1rem', marginTop: '1px' }} className="fa-solid fa-arrow-right"></i> </p></a>
            </motion.div>

        </div>
    );
}

export default Project;