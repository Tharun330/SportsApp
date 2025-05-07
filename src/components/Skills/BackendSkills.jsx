import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function BackendSkills() {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>Languages</h4>
                <SkillCard skill={'Java'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'Python'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'JavaScript'} range={'Advance'} fill={'75%'} />

            </div>

            <div className='box'>
                <h4>FrameWork</h4>
                <SkillCard skill={'Spring Boot'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'Node.js'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'Express.js'} range={'Advance'} fill={'75%'} />
            </div>

            <div className='box'>
                <h4>Testing</h4>
                <SkillCard skill={'Junit'} range={'Advance'} fill={'75%'} />
               
            </div>

            <div className='box'>
                <h4>Misc</h4>
                <SkillCard skill={'MicroServices'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'RestAPI'} range={'Advance'} fill={'75%'} />
                <SkillCard skill={'GraphQL'} range={'Intermediate'} fill={'50%'} />
            </div>

 

        </div>
    );
}

export default BackendSkills;