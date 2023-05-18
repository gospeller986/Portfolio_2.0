import React from 'react' 
import App from './App.js'
import Skill from './pages/Skills.js'
import Project from './pages/Project.js' ;
import Contact from './pages/Contact.js';

import { Route, Routes } from "react-router-dom"



const Router = () => {
  return (
    <Routes>
        <Route path='/' element ={<App/>} />
        <Route path='/skill' element ={<Skill/>} />
        <Route path='/project' element ={<Project/>} />
        <Route path='/contact' element ={<Contact/>} />
    </Routes>
  )
}

export default Router