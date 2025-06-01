import './App.css'
import ContactPage from './components/Contact/Contact';
import HomePage from './components/Home/HomePage'
import { useState } from 'react';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SideBarContext } from './components/Store/SidebarContext';


function App() {
 
  const[sideBarVisible,setSideBarVisible] = useState(false);

  return (
    <BrowserRouter>
      <SideBarContext.Provider value={{ sideBarVisible, setSideBarVisible }}>
        <Header></Header>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </SideBarContext.Provider>
    </BrowserRouter>


  )
}

export default App
