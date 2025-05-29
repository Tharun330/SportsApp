import {useRef, useEffect} from 'react';
import './LinkBox.css'
import { motion, useAnimation, useInView } from 'framer-motion';

function LinkBox({ message, link, content }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView])
    return (
        <motion.div ref={ref} className='linkBox'
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: .70 }}>
            <div>
                <h2>{message}</h2>
            </div>

            <div className='input'>

                <a href={link}><span id="mail">{content}</span></a>
            </div>

        </motion.div>
    );
}

export default LinkBox;