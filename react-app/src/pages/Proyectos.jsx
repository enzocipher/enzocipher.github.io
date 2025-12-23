import React, { useEffect, useState } from 'react'

function formatDate(dateString){
  try{ return new Date(dateString).toLocaleDateString('es-ES',{year:'numeric',month:'short',day:'numeric'}) }catch{ return dateString }
}

export default function Proyectos(){
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(()=>{
    let mounted = true
    const url = 'https://api.github.com/users/enzocipher/repos?sort=updated&per_page=100'
    fetch(url).then(r=>{
      if(!r.ok) throw new Error('HTTP '+r.status)
      return r.json()
    }).then(data=>{ if(mounted){ setRepos(data.filter(r=>!r.fork)); setLoading(false) }}).catch(e=>{ if(mounted){ setError(e.message); setLoading(false) }})
    return ()=> mounted = false
  },[])

  const languages = Array.from(new Set(repos.map(r=> (r.language||'Otros') ))).slice(0,10)
  const visible = repos.filter(r=> filter==='all' || (r.language||'Otros')===filter)

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

        /* Proyectos */
        .projects {
          background: var(--color-light);
          margin: 2rem auto;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          padding: 3rem 2rem;
        }

        /* Botones */
        .btn {
          background: var(--color-accent);
          color: #ffffff;
          padding: 0.9rem 2rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-soft);
          border: none;
          cursor: pointer;
          display: inline-block;
          font-size: 1rem;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(247, 201, 214, 0.5);
          background: #f5b8c8;
        }

        .btn.active {
          background: var(--color-secondary);
          box-shadow: 0 8px 20px rgba(182, 166, 202, 0.4);
        }

        /* Grid de proyectos */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Tarjetas de proyectos */
        .project-card {
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid rgba(247, 201, 214, 0.4);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
        }

        .project-card h3 {
          margin: 1rem 0;
          font-weight: 600;
          color: var(--color-text);
          font-size: 1.3rem;
        }

        .project-card p {
          margin-bottom: 1rem;
          color: #6d6875;
        }

        .project-card p a {
          text-decoration: none;
          font-weight: 500;
          color: var(--color-text);
          border-bottom: 2px solid var(--color-accent);
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }

        .project-card p a:hover {
          color: var(--color-accent);
        }

        /* Meta información del proyecto */
        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1rem 0;
          font-size: 0.9rem;
        }

        .language {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-weight: 500;
          background: var(--color-accent);
          color: #ffffff;
        }

        /* Colores específicos por lenguaje */
        .language.rust {
          background: #dea584;
        }

        .language.python {
          background: #3776ab;
        }

        .language.javascript {
          background: #f7df1e;
          color: #000;
        }

        .language.typescript {
          background: #3178c6;
        }

        .language.java {
          background: #007396;
        }

        .language.c\\+\\+ {
          background: #00599c;
        }

        .language.go {
          background: #00add8;
        }

        .language.varios,
        .language.otros {
          background: var(--color-secondary);
        }

        .updated {
          color: #9a8c98;
          font-size: 0.85rem;
        }

        /* Estados de carga y error */
        .loading,
        .error {
          text-align: center;
          padding: 2rem;
          font-size: 1.1rem;
          color: var(--color-text);
        }

        .error {
          color: #d32f2f;
          background: #ffeaea;
          border-radius: 12px;
          padding: 1.5rem;
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

        /* Responsive */
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 2rem 1rem;
          }

          .projects {
            padding: 2rem 1rem;
          }

          section h2 {
            font-size: 1.8rem;
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

      <section className="projects fade-in">
        <h2>Proyectos</h2>
        <div style={{textAlign:'center', marginBottom:12}}>
          <button className={`btn ${filter==='all'? 'active':''}`} onClick={()=>setFilter('all')}>Todos</button>
          {languages.map(lang=> (
            <button key={lang} style={{marginLeft:8}} className={`btn ${filter===lang? 'active':''}`} onClick={()=>setFilter(lang)}>{lang}</button>
          ))}
        </div>

        {loading && <div className="loading">Cargando repositorios...</div>}
        {error && <div className="error">Error: {error}</div>}

        <div className="project-grid" id="projects-grid">
          {visible.map(repo=> (
            <div className="project-card" key={repo.id} data-language={repo.language||'Otros'}>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Sin descripción disponible.'}</p>
              <div className="project-meta">
                <span className={`language ${ (repo.language||'Otros').toLowerCase() }`}>{repo.language||'Varios'}</span>
                <span className="updated">Actualizado: {formatDate(repo.updated_at)}</span>
              </div>
              <p><a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver repositorio</a></p>
            </div>
          ))}
        </div>
        <div style={{marginTop:20, textAlign:'center'}}><small>Si hay problemas de CORS, considera usar un proxy o servir datos desde un backend.</small></div>
      </section>
    </>
  )
}