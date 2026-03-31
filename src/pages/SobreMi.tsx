export default function SobreMi() {
  return (
    <>
      {/* HERO */}
      <section className="h-hero fade-in">
        <div className="h-hero-bg" aria-hidden="true" />
        <div className="h-hero-content">
          <p className="h-mono">// <span>enzocipher</span>.github.io/sobre-mi</p>
          <h1 className="h-name">
            Sobre <span className="accent">Mí</span>
          </h1>
          <p className="h-desc">
            Conoce más sobre mi trayectoria, habilidades y pasiones.
          </p>
        </div>
      </section>

      {/* MI HISTORIA / EXPERIENCIA / OBJETIVOS */}
      <div className="sm-text-block fade-in">

        <div className="sm-section">
          <h3 className="sm-heading">Mi Historia</h3>
          <p>
            Mi nombre es Enzo Favio O'Besso, soy un entusiasta de la ciberseguridad.
            Desde joven, he tenido una gran pasión por la tecnología y la programación,
            lo que me llevó a elegir esta carrera.
          </p>
        </div>

        <div className="sm-section">
          <h3 className="sm-heading">Mi Experiencia</h3>
          <p>
            Actualmente estudio en la Universidad Peruana de Ciencias Aplicadas en
            Ingeniería de Ciberseguridad, y constantemente participo en competencias
            CTF con mi equipo <strong>OverPwnZ</strong>.
          </p>
        </div>

        <div className="sm-section">
          <h3 className="sm-heading">Mis Objetivos</h3>
          <p>
            Mi objetivo es seguir aprendiendo y creciendo en el campo de la
            ciberseguridad. A futuro me gustaría llegar a ser
            <strong> CISO</strong> (Chief Information Security Officer).
          </p>
        </div>

      </div>

      {/* CERTIFICACIONES */}
      <div className="sm-block fade-in">
        <div className="h-section-header">
          <span className="h-section-title">Certificaciones</span>
        </div>
        <div className="sm-cert-grid">
          {[
            { code: 'CJCA', name: 'Certified Junior Cybersecurity Analyst', url: 'https://www.credly.com/badges/dc4b2b23-06b5-475b-9fa0-5d49f13ce532/linked_in_profile' },
            { code: 'CDSA', name: 'Certified Defensive Security Analyst', url: 'https://www.credly.com/badges/a157334b-79aa-4e46-9860-40a9fd4ba365/linked_in_profile' },
            { code: 'CRTA', name: 'Certified Red Team Analyst', url: 'https://labs.cyberwarfare.live/credential/achievement/69572216c693d19893c34c47' },
          ].map(c => (
            <a href={c.url} target="_blank" rel="noopener noreferrer" key={c.code} className="sm-cert-card">
              <span className="sm-cert-code">{c.code}</span>
              <span className="sm-cert-name">{c.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* HABILIDADES TÉCNICAS */}
      <div className="sm-block fade-in">
        <div className="h-section-header">
          <span className="h-section-title">Habilidades Técnicas</span>
          <span className="h-section-sub">// skills</span>
        </div>
        <div className="skills-grid">

          <div className="skill-category">
            <h3>Lenguajes</h3>
            <ul>
              <li>Rust <span className="sm-level">Intermedio</span></li>
              <li>Python <span className="sm-level">Intermedio</span></li>
              <li>Shell Scripting <span className="sm-level">Intermedio</span></li>
              <li>JavaScript <span className="sm-level">Básico</span></li>
              <li>C++ <span className="sm-level">Básico</span></li>
              <li>TypeScript <span className="sm-level">Básico</span></li>
              <li>Golang <span className="sm-level">Básico</span></li>
              <li>Powershell <span className="sm-level">Básico</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Ciberseguridad</h3>
            <ul>
              <li>Penetration Testing</li>
              <li>Vulnerability Assessment</li>
              <li>Web Application Exploitation</li>
              <li>System Exploitation</li>
              <li>Privilege Escalation</li>
              <li>Post-Exploitation</li>
              <li>Red Teaming</li>
              <li>Adversary Simulation</li>
              <li>Threat Hunting</li>
              <li>Incident Handling</li>
              <li>Intrusion Detection</li>
              <li>Log Analysis</li>
              <li>Network Traffic Analysis</li>
              <li>Security Monitoring</li>
              <li>Encryption Techniques</li>
              <li>Compliance (GDPR, HIPAA)</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Herramientas</h3>
            <ul>
              <li>Nmap</li>
              <li>Metasploit Framework</li>
              <li>Burp Suite</li>
              <li>Caido</li>
              <li>Wireshark</li>
              <li>Elastic Stack (ELK)</li>
              <li>Splunk</li>
              <li>Wazuh</li>
              <li>Volatility</li>
              <li>Autopsy</li>
              <li>YARA</li>
              <li>SQLMap</li>
              <li>Gobuster / WFuzz</li>
              <li>Hydra / John The Ripper</li>
              <li>Velociraptor</li>
              <li>Binary Ninja</li>
              <li>Kali Linux</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}