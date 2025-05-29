import { React, useEffect, useRef, useState } from 'react';
import './SkillPage.css'
import Button from '../Button';
import BackendSkills from './BackendSkills';
import FrontendSkills from './FrontendSkills';
import Tools from './Tools';
import Database from './Database';
import { useMotionValueEvent, useScroll } from 'framer-motion';


function SkillsPage() {

    const [skills, setSkills] = useState({
        front: true,
        back: false,
        tools: false,
        database: false
    })
    const myRef = useRef();



    const [frontClicked, setFrontClicked] = useState(false);
    const [backClicked, setBackClicked] = useState(false);
    const [toolClicked, setToolClicked] = useState(false);
    const [databaseClicked, setDatabaseClicked] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((enteries) => {
            const entry = enteries[0];
            setTimeout(() => {
                setFrontClicked(entry.isIntersecting);
            }, 500)
        })
        observer.observe(myRef.current);
    }, [])

    function handleClickFront(event) {
        console.log(event)
        if (event === 'front') {

            setSkills({

                front: true,
                back: false,
                tools: false,
                database: false
            }
            )



        }

    }

    function handleClickBackend(event) {
        if (event === 'back') {

            setSkills({

                front: false,
                back: true,
                tools: false,
                database: false
            }
            )
            setTimeout(() => {
                setBackClicked(true);
            }, 100)



        }
    }

    function handleClickTool(event) {
        if (event === 'tool') {

            setSkills({

                front: false,
                back: false,
                tools: true,
                database: false
            }
            )

            setTimeout(() => {
                setToolClicked(true);
            }, 100)


        }
    }

    function handleClickDatabase(event) {

        if (event === 'database')

            setSkills({

                front: false,
                back: false,
                tools: false,
                database: true
            }
            )

        setTimeout(() => {
            setDatabaseClicked(true);
        }, 100)


    }



    return (
         

        <div className='skillContent' ref={myRef} >
            <div className='skillCategory'>
                <Button title='FrontEnd' onSelect={(event) => handleClickFront('front')} />
                <Button title='BackEnd' onSelect={(event) => handleClickBackend('back')} />
                <Button title='Tools' onSelect={(event) => handleClickTool('tool')} />
                <Button title='Database' onSelect={(event) => handleClickDatabase('database')} />
            </div>

            <div>
                {skills.front && <FrontendSkills clicked={frontClicked} />}
                {skills.back && <BackendSkills clicked={backClicked} />}
                {skills.tools && <Tools clicked={toolClicked} />}
                {skills.database && <Database clicked={databaseClicked} />}

            </div>


        </div>
    );
}

export default SkillsPage;