import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/main.css'
import Header from './components/Header';
import Footer from './components/Footer';

import IndexPage from './pages/IndexPage';
import CvPage from './pages/CvPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage'; 

function App() {

  return (
    <React.StrictMode>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/resume' element={<CvPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>
  )
}

export default App
