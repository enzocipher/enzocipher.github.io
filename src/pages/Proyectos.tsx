import { useEffect, useState, type CSSProperties } from 'react'
import {
  filterReposByLanguage,
  formatRepoUpdatedAt,
  getRepoAccent,
  getRepoBadgeStyle,
  getRepoLanguages,
  type Repo,
} from '../lib/repos'

type RepoResponse = {
  generatedAt: string
  source: string
  repos: Repo[]
}

export function getReposFromResponse(data: unknown) {
  const parsed = data as Partial<RepoResponse>
  const reposData = Array.isArray(parsed.repos) ? parsed.repos : []
  return reposData.filter(repo => !repo.fork)
}

export function getFetchErrorMessage(status: number) {
  return 'HTTP ' + status
}

function LangBadge({ language }: { language: string | null }) {
  const lang = language || 'otros'
  const style: CSSProperties = getRepoBadgeStyle(language)
  return <span className="proy-lang" style={style}>{lang}</span>
}

export default function Proyectos() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    let mounted = true

    fetch('/repos.json')
      .then(r => { if (!r.ok) throw new Error(getFetchErrorMessage(r.status)); return r.json() })
      .then((data: unknown) => {
        if (!mounted) return
        setRepos(getReposFromResponse(data))
        setLoading(false)
      })
      .catch(e => {
        if (mounted) {
          setError(e.message)
          setLoading(false)
        }
      })
    return () => { mounted = false }
  }, [])

  const languages = getRepoLanguages(repos)
  const visible = filterReposByLanguage(repos, filter)

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
              const accent = getRepoAccent(repo.language)
              const cardStyle = { '--accent': accent } as CSSProperties & { '--accent': string }
              return (
                <div className="proy-card" key={repo.id} style={cardStyle}>
                  <div className="proy-card-top">
                    <a className="proy-name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                    <span className="proy-ext">↗</span>
                  </div>
                  <p className="proy-desc">{repo.description || '// sin descripción'}</p>
                  <div className="proy-footer">
                    <LangBadge language={repo.language} />
                    <span className="proy-date">{formatRepoUpdatedAt(repo.updated_at)}</span>
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