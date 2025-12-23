import React from 'react'

export default function SobreMi(){
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        /* Variables */
        :root {
          --color-bg: #fef6f9;
          --color-accent: #f7c9d6;
          --color-secondary: #b6a6ca;
          --color-text: #4b4453;
          --color-light: #fff9fb;
          --shadow-soft: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        /* Reset básico */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        /* Base general */
        body {
          background: var(--color-bg);
          color: var(--color-text);
          line-height: 1.6;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* Hero */
        .hero {
          text-align: center;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #fde2e4, #f8edeb, #e8e8e4);
          border-radius: 0 0 50% 50% / 20%;
          box-shadow: var(--shadow-soft);
          margin: 0 auto;
          max-width: 1200px;
        }

        .hero h1 {
          font-size: 3rem;
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }

        .hero span {
          color: var(--color-accent);
        }

        .hero p {
          color: #6d6875;
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Secciones */
        section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        section h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          color: var(--color-text);
        }

        /* Sobre Mí - Arreglo Visual */
        .about-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        /* Caja de texto */
        .about-text {
          background: var(--color-light);
          padding: 3rem;
          border-radius: 22px;
          box-shadow: var(--shadow-soft);
        }

        .about-text h2 {
          color: var(--color-accent);
          margin: 2rem 0 1rem;
          font-size: 1.6rem;
        }

        .about-text h2:first-child {
          margin-top: 0;
        }

        .about-text p {
          line-height: 1.9;
          font-size: 1.05rem;
          color: var(--color-text);
        }

        /* Sección habilidades */
        .skills-section {
          background: var(--color-light);
          padding: 3rem;
          border-radius: 22px;
          box-shadow: var(--shadow-soft);
        }

        .skills-section h2 {
          text-align: center;
          margin-bottom: 2.5rem;
          font-size: 2rem;
        }

        /* Grid de habilidades perfectamente alineado */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        /* Tarjetas iguales */
        .skill-category {
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 18px;
          border: 2px solid rgba(247, 201, 214, 0.35);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.1);
        }

        .skill-category h3 {
          color: var(--color-secondary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
          border-bottom: 2px solid var(--color-accent);
          padding-bottom: 0.5rem;
          text-align: center;
        }

        .skill-category ul {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
        }

        .skill-category li {
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(182, 166, 202, 0.2);
          font-size: 0.95rem;
        }

        .skill-category li:last-child {
          border-bottom: none;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
          color: #9a8c98;
          background: var(--color-light);
          box-shadow: var(--shadow-soft);
          margin-top: 4rem;
          width: 100%;
        }

        /* Animaciones */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Sobre Mí */
        @media (max-width: 768px) {
          .about-content {
            padding: 1.5rem;
            gap: 2.5rem;
          }

          .about-text,
          .skills-section {
            padding: 2rem;
          }

          .hero {
            padding: 4rem 1.5rem;
          }

          .hero h1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 480px) {
          .about-text,
          .skills-section {
            padding: 1.5rem;
          }

          .about-text h2 {
            font-size: 1.4rem;
          }

          .skills-section h2 {
            font-size: 1.6rem;
          }

          .hero h1 {
            font-size: 1.8rem;
          }

          .hero p {
            font-size: 1rem;
          }
        }

        /* Fondo de página completo para pantallas grandes */
        @media (min-width: 1200px) {
          body {
            background: linear-gradient(135deg, #fde2e4 0%, #f8edeb 50%, #e8e8e4 100%);
          }

          .main-container {
            background: var(--color-bg);
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
            min-height: 100vh;
          }
        }
      `}</style>

      {/* HERO SOBRE MÍ */}
      <section className="hero fade-in">
        <h1>Sobre <span>Mí</span></h1>
        <p>Conoce más sobre mi trayectoria, habilidades y pasiones</p>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="about-content fade-in">
        
        {/* EDITAR ESTA SECCIÓN ↓ */}
        <div className="about-text">
          <h2>Mi Historia</h2>
          <p>
            Mi nombre es Enzo Favio O'Besso, soy un entusiasta de la ciberseguridad. Desde joven, he tenido una gran pasión por la tecnología y la programación, lo que me llevó a elegir esta carrera.
          </p>

          <h2>Mi Experiencia</h2>
          <p>
            Actualmente estudio en la Universidad Peruana de Ciencias Aplicada en ingeniería de Ciberseguridad, cuento con la certifiación CJCA (Certified Junior Cybersecurity Analyst) de Hack The Box.
            Y constantemente participo en competencias CTF con mi equipo OverPwnZ. 
          </p>

          <h2>Mis Objetivos</h2>
          <p>
            Mi objetivo es seguir aprendiendo y creciendo en el campo de la ciberseguridad, y para el futuro me gustaría ser CISO (Chief Information Security Officer).
          </p>
        </div>

        {/* HABILIDADES TÉCNICAS */}
        <div className="skills-section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            
            <div className="skill-category">
              <h3>Lenguajes de Programación</h3>
              <ul>
                <li>Rust (Intermedio)</li>
                <li>Python (Intermedio)</li>
                <li>JavaScript (Básico)</li>
                <li>C++ (Básico)</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Ciberseguridad</h3>
              <ul>
                <li>Cybersecurity Assessment</li>
                <li>Vulnerability Assessment</li>
                <li>Vulnerability Scanning</li>
                <li>Reconnaissance</li>
                <li>Enumeration</li>
                <li>Penetration Testing</li>
                <li>Web Application Exploitation</li>
                <li>System Exploitation</li>
                <li>Post-Exploitation</li>
                <li>Privilege Escalation</li>
                <li>Remote File Inclusion (RFI)</li>
                <li>Local File Inclusion (LFI)</li>
                <li>Escaping Restricted Shells</li>
                <li>Incident Handling</li>
                <li>Intrusion Detection</li>
                <li>Security Monitoring</li>
                <li>Log Analysis</li>
                <li>Network Traffic Analysis</li>
                <li>Linux Fundamentals</li>
                <li>Networking</li>
                <li>Scripting</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Herramientas</h3>
              <ul>
                <li>Nmap</li>
                <li>Metasploit Framework</li>
                <li>Elastic Stack (ELK Stack)</li>
                <li>Burp Suite</li>
                <li>Caido</li>
                <li>Gobuster</li>
                <li>WFuzz</li>
                <li>Hydra</li>
                <li>John The Ripper</li>
                <li>Nikto</li>
                <li>Netcat (nc)</li>
                <li>Searchsploit</li>
                <li>Kali Linux</li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Enzo Favio — Portafolio personal</p>  
      </footer>
    </>
  )
}