import { describe, expect, it } from 'vitest'
import {
  filterReposByLanguage,
  formatRepoUpdatedAt,
  getRepoAccent,
  getRepoBadgeStyle,
  getRepoLanguages,
  type Repo,
} from '../src/lib/repos'
import { getFetchErrorMessage, getReposFromResponse } from '../src/pages/Proyectos'

const repos: Repo[] = [
  { id: 1, name: 'one', html_url: '#', description: null, language: 'Rust', updated_at: '2026-01-10T12:00:00Z', fork: false },
  { id: 2, name: 'two', html_url: '#', description: null, language: 'TypeScript', updated_at: '2026-02-10T12:00:00Z', fork: false },
  { id: 3, name: 'three', html_url: '#', description: null, language: null, updated_at: '2026-03-10T12:00:00Z', fork: false },
]

describe('repo helpers', () => {
  it('formats repo dates in Spanish', () => {
    expect(formatRepoUpdatedAt('2026-01-10T12:00:00Z')).toContain('ene')
  })

  it('returns unique repo languages with fallback', () => {
    expect(getRepoLanguages(repos)).toEqual(['Rust', 'TypeScript', 'otros'])
  })

  it('filters repos by language and keeps all on all', () => {
    expect(filterReposByLanguage(repos, 'Rust')).toHaveLength(1)
    expect(filterReposByLanguage(repos, 'all')).toHaveLength(3)
  })

  it('provides badge styles and accents for known languages', () => {
    expect(getRepoBadgeStyle('Rust')).toMatchObject({ background: '#FFF1EE', color: '#7A2A1A' })
    expect(getRepoAccent('Rust')).toBe('#E8593C')
  })

  it('falls back for unknown or empty languages', () => {
    expect(getRepoBadgeStyle('Brainfuck')).toEqual({})
    expect(getRepoBadgeStyle(null)).toEqual({})
    expect(getRepoAccent('Brainfuck')).toBe('var(--text-color)')
    expect(getRepoAccent(null)).toBe('var(--text-color)')
  })

  it('parses repo responses and formats fetch errors', () => {
    expect(getReposFromResponse({ repos: [{ ...repos[0], fork: false }, { ...repos[1], fork: true }] })).toHaveLength(1)
    expect(getReposFromResponse({ repos: 'nope' })).toEqual([])
    expect(getFetchErrorMessage(404)).toBe('HTTP 404')
  })
})
