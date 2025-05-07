import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function FrontendSkills() {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>Languages</h4>
                <SkillCard skill={'JavaScript'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'TypeScript'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'HTML&CSS'} range={'Advance'} fill={'75%'} />

            </div>

            <div className='box'>
                <h4>FrameWork</h4>
                <SkillCard skill={'React'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'Angular'} range={'Beginner'} fill={'25%'} />
            </div>

            <div className='box'>
                <h4>CSS Frameworks</h4>
                <SkillCard skill={'BootStrap'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Tailwind CSS'} range={'Intermediate'} fill={'50%'} />
            </div>

            <div className='box'>
                <h4>Testing</h4>              
                <SkillCard skill={'Jest'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Vitest'} range={'Intermediate'} fill={'50%'} />

            </div>



        </div>
    );
}

export default FrontendSkills;