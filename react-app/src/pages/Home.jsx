import React from 'react';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero fade-in">
        <h1>Qué tal, soy <span>Favio</span></h1>
        <p>
          Estudiante de Ingeniería de Ciberseguridad en la Universidad Peruana de Ciencias Aplicadas.
        </p>
        <a href="/proyectos" className="btn">Ver mis proyectos</a>
      </section>

      {/* SOBRE MÍ */}
      <section className="about fade-in">
        <h2>Sobre mí</h2>
        <p>
          Me apasiona la Ciberseguridad, participo en CTFs con el equipo de OverPwnZ, también programo aplicaciones algunas veces. 
          Mi lenguaje de programación favorito es <strong>Rust</strong> y es al que más tiempo dedico a aprender. 
          Próximamente espero tener la certificación <strong>CJCA</strong> de HackTheBox.
        </p>
      </section>

      {/* PROYECTOS */}
      <section className="projects fade-in">
        <h2>Proyectos destacados</h2>
        <div className="project-grid">

          {/* Proyecto 1 */}
          <div className="project-card">
            <a 
              className="repo-icon" 
              href="https://github.com/enzocipher/minimum_path_finder" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Abrir repositorio Minimum Path Finder en GitHub"
            >
              <svg viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.01c-3.22.7-3.9-1.4-3.9-1.4-.53-1.36-1.3-1.73-1.3-1.73-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.26.75-1.55-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.46-2.31 1.2-3.12-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.57.23 2.73.11 3.02.75.81 1.2 1.85 1.2 3.12 0 4.46-2.71 5.45-5.29 5.73.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <h3>Rust Minimum Path Finder</h3>
            <p>Programa en Rust para encontrar el camino mínimo con el algoritmo de Dijkstra y una interfaz gráfica.</p>
            <p>
              <a href="https://github.com/enzocipher/minimum_path_finder" target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </a>
            </p>
          </div>

          {/* Proyecto 2 */}
          <div className="project-card">
            <a 
              className="repo-icon" 
              href="https://github.com/enzocipher/Keylogger_With_Rust" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Abrir repositorio Keylogger With Rust en GitHub"
            >
              <svg viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.01c-3.22.7-3.9-1.4-3.9-1.4-.53-1.36-1.3-1.73-1.3-1.73-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.26.75-1.55-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.46-2.31 1.2-3.12-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.57.23 2.73.11 3.02.75.81 1.2 1.85 1.2 3.12 0 4.46-2.71 5.45-5.29 5.73.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <h3>Keylogger en Rust</h3>
            <p>Proyecto académico en Rust que envía las pulsaciones a un webhook de Discord.</p>
            <p>
              <a href="https://github.com/enzocipher/Keylogger_With_Rust" target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact fade-in">
        <h2>Contacto</h2>
        <p>¿Te gustaría contactar conmigo?</p>
        <a href="mailto:enzocipher@gmail.com" className="btn">Escríbeme</a>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Enzo Favio — Portafolio personal</p>
      </footer>
    </>
  );
};

export default Home;