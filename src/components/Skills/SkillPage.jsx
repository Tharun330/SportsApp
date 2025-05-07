import {React, useState} from 'react';
import './SkillPage.css'
import Button from '../Button';
import BackendSkills from './BackendSkills';
import FrontendSkills from './FrontendSkills';
import Tools from './Tools';
import Database from './Database';

function SkillsPage() {

    const [skills, setSkills] = useState({
        front: true,
        back: false,
        tools: false,
        database: false
    })

    function handleClick(event) {
        console.log(event)
        if (event === 'front') {

            setSkills({

                front: true,
                back: false,
                tools: false,
                database: false
            }
            )

        }else if (event === 'back') {

            setSkills({

                front: false,
                back: true,
                tools: false,
                database: false
            }
            )

        }else if (event === 'tool') {

            setSkills({

                front: false,
                back: false,
                tools: true,
                database: false
            }
            )

        }else {

            setSkills({

                front: false,
                back: false,
                tools: false,
                database: true
            }
            )

        }

    }
    return (

         
        <div className='skillContent'>
            <div className='skillCategory'>
                <Button title='FrontEnd' onSelect={(event) => handleClick('front')} />
                <Button title='BackEnd' onSelect={(event) => handleClick('back')} />
                <Button title='Tools' onSelect={(event) => handleClick('tool')} />
                <Button title='Database' onSelect={(event) => handleClick('database')} />
            </div>

            <div>
                {skills.front && <FrontendSkills />}
                {skills.back && <BackendSkills/>}
                {skills.tools && <Tools/>}
                {skills.database && <Database/>}
                
            </div>


        </div>
    );
}

export default SkillsPage;