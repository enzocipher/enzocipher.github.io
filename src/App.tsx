import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import CTF from './pages/CTF'
import Ale from './pages/Ale'

// 1. Creamos un Layout para las páginas que SÍ llevan Navbar y Footer
function MainLayout() {
  return (
    <div className="main-container">
      <Navbar />
      <Outlet /> {/* Aquí se renderizarán Home, Proyectos, etc. */}
      <Footer />
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      {/* 2. Agrupamos las rutas estándar dentro del MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-mi" element={<SobreMi/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/ctf" element={<CTF/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>

      {/* 3. Dejamos la ruta de Ale completamente aislada por fuera */}
      <Route path="/ale" element={<Ale/>} />
    </Routes>
  )
}
