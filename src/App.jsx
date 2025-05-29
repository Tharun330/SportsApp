import './App.css'
import ContactPage from './components/Contact/Contact';
import HomePage from './components/Home/HomePage'
import React from 'react';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>

      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
