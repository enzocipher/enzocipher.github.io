export default function SobreMi() {
  const languageSkills = [
    { mark: 'R', name: 'Rust', level: 'Intermedio' },
    { mark: 'Py', name: 'Python', level: 'Intermedio' },
    { mark: '>_', name: 'Shell Scripting', level: 'Intermedio' },
    { mark: 'JS', name: 'JavaScript', level: 'Básico' },
    { mark: 'C++', name: 'C++', level: 'Básico' },
    { mark: 'TS', name: 'TypeScript', level: 'Básico' },
    { mark: 'Go', name: 'Golang', level: 'Básico' },
    { mark: 'PS', name: 'Powershell', level: 'Básico' },
  ]
  const securitySkills = [
    'Penetration Testing', 'Vulnerability Assessment', 'Web Application Exploitation',
    'System Exploitation', 'Privilege Escalation', 'Post-Exploitation', 'Red Teaming',
    'Adversary Simulation', 'Threat Hunting', 'Incident Handling', 'Intrusion Detection',
    'Log Analysis', 'Network Traffic Analysis', 'Security Monitoring', 'Encryption Techniques',
    'Compliance (GDPR, HIPAA)',
  ]
  const toolSkills = [
    'Nmap', 'Metasploit Framework', 'Burp Suite', 'Caido', 'Wireshark',
    'Elastic Stack (ELK)', 'Splunk', 'Wazuh', 'Volatility', 'Autopsy', 'YARA', 'SQLMap',
    'Gobuster / WFuzz', 'Hydra / John The Ripper', 'Velociraptor', 'Binary Ninja', 'Kali Linux',
  ]

  return (
    <div className="sm-page">
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
          <h2 className="sm-heading">Mi Historia</h2>
          <p>
            Mi nombre es Enzo Favio O'Besso, soy un entusiasta de la ciberseguridad.
            Desde joven, he tenido una gran pasión por la tecnología y la programación,
            lo que me llevó a elegir esta carrera.
          </p>
        </div>

        <div className="sm-section">
          <h2 className="sm-heading">Mi Experiencia</h2>
          <p>
            Actualmente estudio en la Universidad Peruana de Ciencias Aplicadas en
            Ingeniería de Ciberseguridad, y constantemente participo en competencias
            CTF con mi equipo <strong>OverPwnZ</strong>.
          </p>
        </div>

        <div className="sm-section">
          <h2 className="sm-heading">Mis Objetivos</h2>
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
          <h2 className="h-section-title">Certificaciones</h2>
        </div>
        <div className="sm-cert-grid">
          {[
            { code: 'CJCA', name: 'Certified Junior Cybersecurity Analyst', url: 'https://www.credly.com/badges/dc4b2b23-06b5-475b-9fa0-5d49f13ce532/linked_in_profile' },
            { code: 'CDSA', name: 'Certified Defensive Security Analyst', url: 'https://www.credly.com/badges/a157334b-79aa-4e46-9860-40a9fd4ba365/linked_in_profile' },
            { code: 'CRTA', name: 'Certified Red Team Analyst', url: 'https://labs.cyberwarfare.live/credential/achievement/69572216c693d19893c34c47' },
          ].map(c => (
            <a href={c.url} target="_blank" rel="noopener noreferrer" key={c.code} className="sm-cert-card">
              <div className="sm-cert-emblem">
                <img src={`/assets/certs/${c.code.toLowerCase()}.${c.code === 'CRTA' ? 'webp' : 'png'}`} alt="" loading="lazy" width="160" height="160" />
              </div>
              <span className="sm-cert-code">{c.code}</span>
              <span className="sm-cert-name">{c.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* HABILIDADES TÉCNICAS */}
      <div id="habilidades" className="sm-block fade-in">
        <div className="h-section-header">
          <h2 className="h-section-title">Habilidades Técnicas</h2>
          <span className="h-section-sub">// skills</span>
        </div>
        <div className="skills-grid">

          <div className="skill-category skill-languages">
            <h3>
              <svg className="skill-heading-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m8 5-6 7 6 7M16 5l6 7-6 7" /></svg>
              Lenguajes
            </h3>
            <ul>
              {languageSkills.map(skill => (
                <li key={skill.name}>
                  <span className="skill-language-mark" aria-hidden="true">{skill.mark}</span>
                  <span className="skill-language-name">{skill.name}</span>
                  <span className="sm-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category skill-security">
            <h3>
              <svg className="skill-heading-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6v5c0 5.1-3.4 8.2-8 10-4.6-1.8-8-4.9-8-10V6l8-3Z"/><path d="M9.2 12a2.8 2.8 0 1 1 5.6 0c0 1.2-.7 1.9-1.5 2.6-.8.6-1.3 1.1-1.3 2"/><path d="M12 18h.01"/></svg>
              Ciberseguridad
            </h3>
            <ul>
              {securitySkills.map(skill => (
                <li key={skill}>
                  <svg className="skill-security-mark" viewBox="0 0 8 8" aria-hidden="true"><path d="M4 0 8 4 4 8 0 4Z" fill="currentColor" /></svg>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-category skill-tools">
            <h3>
              <svg className="skill-heading-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 6.5a5 5 0 0 0-6.3 6.3L3 18a2.1 2.1 0 0 0 3 3l5.2-5.2a5 5 0 0 0 6.3-6.3l-3 3-3-3 3-3Z"/><path d="m18 4 2 2"/></svg>
              Herramientas
            </h3>
            <ul>
              {toolSkills.map((skill, index) => (
                <li key={skill}>
                  <span className="skill-tool-mark" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {index % 3 === 0 ? <><circle cx="8" cy="8" r="5.5"/><path d="M5 8h6M8 5v6"/></> : index % 3 === 1 ? <><path d="m8 1.8 5.2 3v6L8 13.8l-5.2-3v-6L8 1.8Z"/><path d="m5.7 8 1.5 1.5 3.2-3.2"/></> : <><path d="M3 3h10v10H3z"/><path d="M5.5 6h5M5.5 8h5M5.5 10h3"/></>}
                    </svg>
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
