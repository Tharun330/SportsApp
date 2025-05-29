

import PersonImg from '../PersonContent/PersonImg'
import PersonIntro from '../PersonContent/PersonIntro'
import Updown from '../UpdownAnimation/Updown'
import SkillsPage from '../Skills/SkillPage'
import ProjectPage from '../Project/ProjectPage'
import ConnectPage from '../Connect/ConnectPage'

function HomePage() {
    return (
        <>

            <div className='personContent'>
                <PersonImg />
                <PersonIntro />
            </div>
            <Updown message={'Scroll Down to see more 😁!'} />
            <SkillsPage />
            <ProjectPage />
            <ConnectPage />



        </>
    );
}

export default HomePage;