import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function Tools({clicked}) {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>DevOps</h4>
                <SkillCard skill={'Docker'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'Jenkins'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'Netlify'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                

            </div>

            <div className='box'>
                <h4>Version Control</h4>
                <SkillCard skill={'Git'} range={'Advance'} fill={clicked? '75%' : '0%'}/>
                <SkillCard skill={'GitHub'} range={'Advance'} fill={clicked? '50%' : '0%'} />
            </div>

            <div className='box'>
                <h4>Testing</h4>
                <SkillCard skill={'Postman'} range={'Advance'} fill={clicked? '75%' : '0%'}/>
                <SkillCard skill={'Junit'} range={'Advance'} fill={clicked? '75%' : '0%'} />
            </div>

            <div className='box'>
                <h4>Cloud</h4>              
                <SkillCard skill={'AWS'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />

            </div>



        </div>
    );
}

export default Tools;