import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Mi Portfolio</div>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi">Sobre mí</NavLink></li>
          <li><NavLink to="/proyectos">Proyectos</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
          <li><a href="https://github.com/enzocipher" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/enzo-favio-o-besso-93409b335" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <button className="menu-toggle" aria-label="Abrir menú" onClick={()=>setOpen(v=>!v)}>{open? 'Cerrar' : 'Menu'}</button>
      </nav>
    </header>
  )
}
