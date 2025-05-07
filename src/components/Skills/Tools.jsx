import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function Tools() {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>DevOps</h4>
                <SkillCard skill={'Docker'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Jenkins'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Netlify'} range={'Intermediate'} fill={'50%'} />
                

            </div>

            <div className='box'>
                <h4>Version Control</h4>
                <SkillCard skill={'Git'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'GitHub'} range={'Advance'} fill={'50%'} />
            </div>

            <div className='box'>
                <h4>Testing</h4>
                <SkillCard skill={'Postman'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'Junit'} range={'Advance'} fill={'75%'} />
            </div>

            <div className='box'>
                <h4>Cloud</h4>              
                <SkillCard skill={'AWS'} range={'Intermediate'} fill={'50%'} />

            </div>



        </div>
    );
}

export default Tools;