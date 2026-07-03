export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  updated_at: string
  fork: boolean
}

const LANG_COLORS = {
  Rust: { bg: '#FFF1EE', text: '#7A2A1A', accent: '#E8593C' },
  Python: { bg: '#EFF6FF', text: '#1A3A6A', accent: '#3B82F6' },
  JavaScript: { bg: '#FEFCE8', text: '#6B4900', accent: '#EAB308' },
  TypeScript: { bg: '#EFF6FF', text: '#1A3A6A', accent: '#378ADD' },
  C: { bg: '#F0F4FF', text: '#1E2A5A', accent: '#534AB7' },
  'C++': { bg: '#F0F4FF', text: '#1E2A5A', accent: '#7F77DD' },
  HTML: { bg: '#FFF4EE', text: '#7A3010', accent: '#E85D24' },
  CSS: { bg: '#F0FAFF', text: '#0A4060', accent: '#1D9E75' },
  Shell: { bg: '#F0FFF4', text: '#0A3A20', accent: '#3B6D11' },
  Go: { bg: '#E8F8FF', text: '#0A3048', accent: '#185FA5' },
} as const

export type RepoLanguage = keyof typeof LANG_COLORS

export function getRepoBadgeStyle(language: string | null) {
  const lang = language as RepoLanguage | null
  const colors = lang ? LANG_COLORS[lang] : undefined

  return colors
    ? { background: colors.bg, color: colors.text, borderColor: colors.accent + '55' }
    : {}
}

export function getRepoAccent(language: string | null) {
  const lang = language as RepoLanguage | null
  return lang ? LANG_COLORS[lang]?.accent ?? 'var(--text-color)' : 'var(--text-color)'
}

export function formatRepoUpdatedAt(updatedAt: string) {
  return new Date(updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })
}

export function getRepoLanguages(repos: Repo[], limit = 12) {
  return Array.from(new Set(repos.map(repo => repo.language || 'otros'))).slice(0, limit)
}

export function filterReposByLanguage(repos: Repo[], language: string) {
  return language === 'all' ? repos : repos.filter(repo => (repo.language || 'otros') === language)
}
