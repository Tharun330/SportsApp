import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function FrontendSkills({clicked}) {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>Languages</h4>
                <SkillCard skill={'JavaScript'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                <SkillCard skill={'TypeScript'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'HTML&CSS'} range={'Advance'} fill={clicked? '75%' : '0%'} />

            </div>

            <div className='box'>
                <h4>FrameWork</h4>
                <SkillCard skill={'React'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                <SkillCard skill={'Angular'} range={'Beginner'} fill={clicked? '25%' : '0%'} />
            </div>

            <div className='box'>
                <h4>CSS Frameworks</h4>
                <SkillCard skill={'BootStrap'} range={'Intermediate'} fill={clicked? '50%' : '0%'}/>
                <SkillCard skill={'Tailwind CSS'} range={'Intermediate'} fill={clicked? '50%' : '0%'}/>
            </div>

            <div className='box'>
                <h4>Testing</h4>              
                <SkillCard skill={'Jest'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'Vitest'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />

            </div>



        </div>
    );
}

export default FrontendSkills;