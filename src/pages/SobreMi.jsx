import React from 'react'

export default function SobreMi(){
  return (
    <>

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
            Actualmente estudio en la Universidad Peruana de Ciencias Aplicada en ingeniería de Ciberseguridad.
            Y constantemente participo en competencias CTF con mi equipo OverPwnZ. 
          </p>

          <h2>Mis Objetivos</h2>
          <p>
            Mi objetivo es seguir aprendiendo y creciendo en el campo de la ciberseguridad, y para el futuro me gustaría llegar a ser CISO (Chief Information Security Officer).
          </p>
        </div>

        {/* CERTIFICACIONES */}
        <div className="skills-section">
          <h2>Certificaciones</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <h4>CJCA</h4>
              <p>Certified Junior Cybersecurity Analyst</p>
            </div>
            <div className="certification-card">
              <h4>CDSA</h4>
              <p>Certified Defensive Security Analyst</p>
            </div>
            <div className="certification-card">
              <h4>CRTA</h4>
              <p>Certified Red Team Analyst</p>
            </div>
          </div>
        </div>

        {/* HABILIDADES TÉCNICAS */}
        <div className="skills-section">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            
            <div className="skill-category">
              <h3>Lenguajes</h3>
              <ul>
                <li>Rust (Intermedio)</li>
                <li>Python (Intermedio)</li>
                <li>JavaScript (Básico)</li>
                <li>C++ (Básico)</li>
                <li>TypeScript (Básico)</li>
                <li>Golang (Básico)</li>
                <li>Shell Scripting (Intermedio)</li>
                <li>Powershell (Básico)</li>
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
                <li>Data Protection</li>
                <li>Encryption Techniques</li>
                <li>Compliance Frameworks (GDPR, HIPAA)</li>
                <li>Data Loss Prevention</li>
                <li>Red Teaming</li>
                <li>Adversary Simulation</li>
                <li>Advanced Persistent Threats</li>
                <li>Threat Hunting</li>
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
                <li>Searchsploit</li>
                <li>Kali Linux</li>
                <li>Velociraptor</li>
                <li>Eric Zimmerman's Tools</li>
                <li>Splunk</li>
                <li>Wazuh</li>
                <li>Wireshark</li>
                <li>Volatility</li>
                <li>Autopsy</li>
                <li>SQLMap</li>
                <li>Binary ninja</li>
                <li>YARA</li>
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