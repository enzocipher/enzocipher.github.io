import React from 'react'

export default function Contacto(){
  return (
    <section className="contact fade-in">
      <div style={{textAlign: 'center', marginBottom: '1rem'}}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: 'var(--color-accent)'}}>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
        </svg>
      </div>
      <h2>Contacto</h2>
      <p>¿Te gustaría contactar conmigo?</p>
      <p>
        Estoy disponible de lunes a viernes.
      </p>
      <a href="mailto:enzocipher@gmail.com" className="btn">Escríbeme</a>
    </section>
  )
}
