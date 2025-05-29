import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function Database({clicked}) {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>SQL</h4>
                <SkillCard skill={'MySQL'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'Oracle'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                <SkillCard skill={'Postgre'} range={'Intermediate'} fill={clicked? '50%' : '0%'} />
                

            </div>

            <div className='box'>
                <h4>No SQL</h4>
                <SkillCard skill={'MongoDB'} range={'Advance'} fill={clicked? '75%' : '0%'} />
                
            </div>

           
        </div>
    );
}

export default Database;