import { useEffect, useState } from 'react'

const LANG_COLORS = {
  Rust:       { bg: '#FFF1EE', text: '#7A2A1A', accent: '#E8593C' },
  Python:     { bg: '#EFF6FF', text: '#1A3A6A', accent: '#3B82F6' },
  JavaScript: { bg: '#FEFCE8', text: '#6B4900', accent: '#EAB308' },
  TypeScript: { bg: '#EFF6FF', text: '#1A3A6A', accent: '#378ADD' },
  C:          { bg: '#F0F4FF', text: '#1E2A5A', accent: '#534AB7' },
  'C++':      { bg: '#F0F4FF', text: '#1E2A5A', accent: '#7F77DD' },
  HTML:       { bg: '#FFF4EE', text: '#7A3010', accent: '#E85D24' },
  CSS:        { bg: '#F0FAFF', text: '#0A4060', accent: '#1D9E75' },
  Shell:      { bg: '#F0FFF4', text: '#0A3A20', accent: '#3B6D11' },
  Go:         { bg: '#E8F8FF', text: '#0A3048', accent: '#185FA5' },
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })
  } catch {
    return ''
  }
}

function LangBadge({ language }) {
  const lang = language || 'otros'
  const c = LANG_COLORS[language]
  const style = c
    ? { background: c.bg, color: c.text, borderColor: c.accent + '55' }
    : {}
  return <span className="proy-lang" style={style}>{lang}</span>
}

export default function Proyectos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    let mounted = true
    fetch('https://api.github.com/users/enzocipher/repos?sort=updated&per_page=100')
      .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json() })
      .then(data => { if (mounted) { setRepos(data.filter(r => !r.fork)); setLoading(false) } })
      .catch(e => { if (mounted) { setError(e.message); setLoading(false) } })
    return () => { mounted = false }
  }, [])

  const languages = Array.from(new Set(repos.map(r => r.language || 'otros'))).slice(0, 12)
  const visible = filter === 'all' ? repos : repos.filter(r => (r.language || 'otros') === filter)

  return (
    <section className="proyectos fade-in">
      <div className="proy-header">
        <p className="proy-eyebrow">~/enzocipher/repos</p>
        <h2 className="proy-title">Proyectos</h2>
        <p className="proy-subtitle">Repositorios públicos en GitHub, sin forks.</p>
      </div>

      <div className="proy-filters">
        <button className={`proy-chip${filter === 'all' ? ' active' : ''}`} onClick={() => setFilter('all')}>
          todos
        </button>
        {languages.map(lang => (
          <button
            key={lang}
            className={`proy-chip${filter === lang ? ' active' : ''}`}
            onClick={() => setFilter(lang)}
          >
            {lang.toLowerCase()}
          </button>
        ))}
      </div>

      {!loading && !error && (
        <p className="proy-count">{visible.length} repositorio{visible.length !== 1 ? 's' : ''}</p>
      )}

      {loading && (
        <div className="proy-grid">
          {[1, 2, 3].map(i => (
            <div className="proy-card" key={i} style={{ gap: 12 }}>
              <div className="proy-skeleton" style={{ height: 14, width: '60%' }} />
              <div className="proy-skeleton" style={{ height: 11, width: '85%' }} />
              <div className="proy-skeleton" style={{ height: 11, width: '65%' }} />
            </div>
          ))}
        </div>
      )}

      {error && <p className="proy-error">// error: {error}</p>}

      {!loading && !error && (
        <div className="proy-grid">
          {visible.length === 0 ? (
            <p className="proy-empty">// sin resultados para este filtro</p>
          ) : (
            visible.map(repo => {
              const accent = LANG_COLORS[repo.language]?.accent || 'var(--text-color)'
              return (
                <div className="proy-card" key={repo.id} style={{ '--accent': accent }}>
                  <div className="proy-card-top">
                    <a className="proy-name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                    <span className="proy-ext">↗</span>
                  </div>
                  <p className="proy-desc">{repo.description || '// sin descripción'}</p>
                  <div className="proy-footer">
                    <LangBadge language={repo.language} />
                    <span className="proy-date">{formatDate(repo.updated_at)}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}
    </section>
  )
}