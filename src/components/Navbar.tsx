import React, { useState } from 'react'
import { Link } from 'preact-router'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Mi Portfolio</div>
        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><Link href="/" activeClassName="active" onClick={closeMenu}>Inicio</Link></li>
          <li><Link href="/sobre-mi" activeClassName="active" onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link href="/proyectos" activeClassName="active" onClick={closeMenu}>Proyectos</Link></li>
          <li><Link href="/contacto" activeClassName="active" onClick={closeMenu}>Contacto</Link></li>
          <li><a href="https://github.com/enzocipher" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/enzo-favio-o-besso-93409b335" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <button className="menu-toggle" aria-label="Abrir menú" onClick={()=>setOpen(v=>!v)}>{open? 'Cerrar' : 'Menu'}</button>
      </nav>
    </header>
  )
}
