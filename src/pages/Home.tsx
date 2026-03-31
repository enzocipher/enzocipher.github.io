import { useState } from 'react'
import { Link } from 'react-router-dom'

const FONTS = ['Poppins', 'Courier New', 'Arial', 'Times New Roman', 'Verdana']

function StarSpin() {
  return (
    <div className="h-star-wrap" aria-hidden="true">
      <svg className="h-star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="50,2 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function Home() {
  const [fontIndex, setFontIndex] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="h-hero fade-in">
        <div className="h-hero-bg" aria-hidden="true" />
        <div className="h-hero-content">
          <p className="h-mono">// <span>enzocipher</span>.github.io</p>
          <h1
            className="h-name"
            style={{ fontFamily: FONTS[fontIndex], cursor: 'pointer' }}
            onClick={() => setFontIndex(i => (i + 1) % FONTS.length)}
            onMouseEnter={() => setFontIndex(i => (i + 1) % FONTS.length)}
          >
            Qué tal,<br />soy <span className="accent">Favio</span>
          </h1>
          <p className="h-desc">
            Estudiante de Ingeniería de Ciberseguridad en la Universidad Peruana de Ciencias Aplicadas.
          </p>
          <div className="h-tags">
            {['ciberseguridad', 'rust', 'siem', 'forense'].map(t => (
              <span key={t} className="h-tag">{t}</span>
            ))}
          </div>
          <Link to="/proyectos" className="h-btn">Ver mis proyectos →</Link>
        </div>

        <StarSpin />
      </section>

      {/* SOBRE MÍ */}
      <div className="h-about fade-in">
        <span className="h-about-label">sobre_mi.md</span>
        <p>
          Me apasiona la Ciberseguridad y también programo aplicaciones algunas veces.
          Mi lenguaje de programación favorito es <strong>Rust</strong> y es al que más
          tiempo dedico a aprender.
        </p>
      </div>

      {/* PROYECTOS DESTACADOS */}
      <div className="h-projects fade-in">
        <div className="h-section-header">
          <span className="h-section-title">Proyectos destacados</span>
          <span className="h-section-sub">// 2 pinned</span>
        </div>
        <div className="h-proj-grid">
          {[
            {
              name: 'minimum_path_finder',
              url: 'https://github.com/enzocipher/minimum_path_finder',
              desc: 'Programa en Rust para encontrar el camino mínimo con el algoritmo de Dijkstra y una interfaz gráfica.',
              tags: 'dijkstra · GUI',
            },
            {
              name: 'Keylogger_With_Rust',
              url: 'https://github.com/enzocipher/Keylogger_With_Rust',
              desc: 'Proyecto académico en Rust que envía las pulsaciones a un webhook de Discord.',
              tags: 'discord · webhook',
            },
          ].map(p => (
            <div className="h-proj-card" key={p.name}>
              <div className="h-proj-top">
                <a className="h-proj-name" href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
                <span className="h-proj-ext">↗</span>
              </div>
              <p className="h-proj-desc">{p.desc}</p>
              <div className="h-proj-foot">
                <span className="h-proj-lang">rust</span>
                <span className="h-proj-more">{p.tags}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACTO STRIP */}
      <div className="h-contact fade-in">
        <div className="h-contact-text">
          <p>¿Hablamos?</p>
          <p>Disponible de lunes a viernes · enzocipher@gmail.com</p>
        </div>
        <a className="h-btn" href="mailto:enzocipher@gmail.com">Escríbeme →</a>
      </div>

      <footer>
        <p>© 2025 Enzo Favio — Portafolio personal</p>
      </footer>
    </>
  )
}