import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes, } from 'react-router-dom';
import About from './components/About.js'
import React, { useState } from 'react'
import Services from './components/Services'
import Contact from './components/Contact'
import ServicesCard from './components/ServicesCard';

function App() {
  
  

  return (
    <div className="App">
    <Header className ="Header"/>
   
    <div className='AppMain'>
      <Routes>
      <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/companies/:id' element={<Main />} />
      </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;