import React from 'react';
import './SkillCard.css';
import {motion} from 'framer-motion'

function SkillCard({ skill, range, fill }) {
    return (
        <div className='card'>
            <div className='skillName'>
                <p>{skill}</p>
            </div>
            <div>

                <p>{range}</p>
                <div className="progress-bar" >
                    <motion.div className="fill" transition={{
                        duration:.3,
                        type: 'spring'
                    }} style={{width: fill}} ></motion.div>
                </div>

            </div>




        </div>
    );
}

export default SkillCard;