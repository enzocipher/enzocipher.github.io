import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import CTF from './pages/CTF'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-mi" element={<SobreMi/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/ctf" element={<CTF/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}
