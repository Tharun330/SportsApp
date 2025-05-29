import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function About() {

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
            <motion.h1
            ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: .70 }}>About Me🤪</motion.h1>
            <motion.div variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: .90 }}>
                <p>I'm a Software Engineer with 3+ years experience in software development.</p>
                <p> Specializing in building and testing web services and APIs. Previously, with telecommunication domain project.</p>
                <p>Full Stack web projects where I developed and tested APIs using Java, JavaScript, Node.js, Spring Boot,
                    React.js, SoapUI, and Postman.</p>
                <p> I am passionate about building Full Stack Web Applications, scalable backend systems, API design, and
                    problem-solving</p>
                <p>Enthuses to learn new technologies</p>
            </motion.div>
        </>

    );
}

export default About;