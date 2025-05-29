import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function BackendSkills({clicked}) {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>Languages</h4>
                <SkillCard skill={'Java'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                <SkillCard skill={'Python'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'JavaScript'} range={'Advance'} fill={clicked? '75%' : '0%'}/>

            </div>

            <div className='box'>
                <h4>FrameWork</h4>
                <SkillCard skill={'Spring Boot'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                <SkillCard skill={'Node.js'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                <SkillCard skill={'Express.js'} range={'Advance'} fill={clicked? '75%' : '0%'} />
            </div>

            <div className='box'>
                <h4>Testing</h4>
                <SkillCard skill={'Junit'} range={'Advance'} fill={clicked? '75%' : '0%'} />
               
            </div>

            <div className='box'>
                <h4>Misc</h4>
                <SkillCard skill={'MicroServices'} range={'Intermediate'} fill={clicked? '50%' : '0%'}/>
                <SkillCard skill={'RestAPI'} range={'Advance'} fill={clicked? '75%' : '0%'}/>
                <SkillCard skill={'GraphQL'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
            </div>

 

        </div>
    );
}

export default BackendSkills;