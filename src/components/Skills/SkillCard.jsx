import React from 'react';
import './SkillCard.css'

function SkillCard({ skill, range, fill }) {
    return (
        <div className='card'>
            <div className='skillName'>
                <p>{skill}</p>
            </div>
            <div>

                <p>{range}</p>
                <div className="progress-bar" >
                    <div className="fill"style={{width: fill}} ></div>
                </div>

            </div>




        </div>
    );
}

export default SkillCard;