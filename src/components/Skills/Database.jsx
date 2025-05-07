import React from 'react';
import SkillCard from './SkillCard';
import './Skills.css'

function Database() {
    return (
        <div className='skillsBox'>

            <div className='box'>
                <h4>SQL</h4>
                <SkillCard skill={'MySQL'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Oracle'} range={'Intermediate'} fill={'50%'} />
                <SkillCard skill={'Postgre'} range={'Intermediate'} fill={'50%'} />
                

            </div>

            <div className='box'>
                <h4>No SQL</h4>
                <SkillCard skill={'MongoDB'} range={'Advance'} fill={'75%'} />
                
            </div>

           
        </div>
    );
}

export default Database;