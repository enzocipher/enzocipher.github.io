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

      <section className="projects fade-in">
        <h2>Proyectos</h2>
        <div style={{display:'flex', justifyContent:'center', gap:'0.5rem', flexWrap:'wrap', marginBottom:12}}>
          <button className={`btn ${filter==='all'? 'active':''}`} onClick={()=>setFilter('all')}>Todos</button>
          {languages.map(lang=> (
            <button key={lang} className={`btn ${filter===lang? 'active':''}`} onClick={()=>setFilter(lang)}>{lang}</button>
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