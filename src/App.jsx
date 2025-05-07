import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PersonImg from './components/PersonContent/PersonImg'
import PersonIntro from './components/PersonContent/PersonIntro'
import Updown from './components/UpdownAnimation/Updown'
import SkillsPage from './components/Skills/SkillPage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className='personContent'>
          <PersonImg />
          <PersonIntro/>
        </div>
        <Updown message={'Scroll Down to see more 😁!'}/>
        <SkillsPage/>
        
      </BrowserRouter>

    </>
  )
}

export default App
