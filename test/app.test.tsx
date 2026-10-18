import { render, screen, fireEvent, waitFor, cleanup, act } from '@testing-library/preact'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { route } from 'preact-router'
import App from '../src/App'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Proyectos from '../src/pages/Proyectos'
import Contacto from '../src/pages/Contacto'
import SobreMi from '../src/pages/SobreMi'
import CTF from '../src/pages/CTF'
import NotFound from '../src/pages/NotFound'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
  window.history.pushState({}, '', '/')
})

function renderRoute(path: string) {
  window.history.pushState({}, '', path)
  const view = render(
    <App />,
  )
  act(() => {
    route(path)
  })
  return view
}

describe('app routes', () => {
  it('renders the home route', () => {
    renderRoute('/')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Qué tal')
    expect(screen.getByText('© 2025 Enzo Favio — Portafolio personal')).toBeTruthy()
  })

  it('renders the about route', async () => {
    renderRoute('/')
    fireEvent.click(screen.getByRole('link', { name: 'Sobre mí', exact: true }))
    expect(screen.getByText('Mi Historia')).toBeTruthy()
    expect(screen.getByText('Certificaciones')).toBeTruthy()
    await waitFor(() => expect(screen.getByRole('link', { name: 'Sobre mí', exact: true }).classList.contains('active')).toBe(true))
  })

  it('renders the projects route', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        generatedAt: '2026-07-02T00:00:00Z',
        source: 'github',
        repos: [
          { id: 1, name: 'alpha', html_url: 'https://example.com/a', description: 'alpha', language: 'Rust', updated_at: '2026-01-10T12:00:00Z', fork: false },
          { id: 2, name: 'beta', html_url: 'https://example.com/b', description: 'beta', language: 'TypeScript', updated_at: '2026-02-10T12:00:00Z', fork: true },
        ],
      }),
    }))

    renderRoute('/proyectos')
    expect(await screen.findByRole('link', { name: 'alpha' })).toBeTruthy()
    expect(screen.getByText('1 repositorio')).toBeTruthy()
  })

  it('renders the contact route', () => {
    renderRoute('/contacto')
    expect(screen.getByText('Hablemos')).toBeTruthy()
    expect(screen.getByText('enzocipher@gmail.com')).toBeTruthy()
  })

  it('renders the CTF route', () => {
    renderRoute('/ctf')
    expect(screen.getByText('CTF - OverPwnZ')).toBeTruthy()
  })

  it('renders the not found route', () => {
    renderRoute('/missing')
    expect(screen.getByLabelText('404')).toBeTruthy()
  })

  it('does not render the removed Ale page', () => {
    renderRoute('/ale')
    expect(screen.getByLabelText('404')).toBeTruthy()
    expect(screen.queryByText(/Querida Ale|Para Alexa/)).toBeNull()
  })
})

describe('shared components', () => {
  it('toggles the navbar menu', () => {
    render(
      <Navbar />,
    )

    const button = screen.getByRole('button', { name: 'Abrir menú' })
    expect(button.textContent).toContain('Menu')
    expect(button.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: 'Abrir menú' }).textContent).toContain('Cerrar')
    expect(button.getAttribute('aria-expanded')).toBe('true')
    fireEvent.keyDown(screen.getByRole('navigation', { name: 'Navegación principal' }), { key: 'Escape' })
    expect(button.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(button)
    expect(button.getAttribute('aria-expanded')).toBe('true')
    fireEvent.click(screen.getByRole('link', { name: 'Inicio' }))
    expect(screen.getByRole('button', { name: 'Abrir menú' }).textContent).toContain('Menu')
    expect(button.getAttribute('aria-expanded')).toBe('false')
  })

  it('collapses and expands the sidebar while preserving navigation links', () => {
    render(<Navbar />)

    const header = document.querySelector('.site-navigation') as HTMLElement
    const toggle = screen.getByRole('button', { name: 'Contraer navegación' })
    expect(screen.getByText('EnzoCipher')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Inicio' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Contacto' })).toBeTruthy()
    expect(toggle.getAttribute('aria-expanded')).toBe('true')

    fireEvent.click(toggle)
    expect(header.classList.contains('is-collapsed')).toBe(true)
    const expandToggle = screen.getByRole('button', { name: 'Expandir navegación' })
    expect(expandToggle.getAttribute('aria-expanded')).toBe('false')
    expect(expandToggle.getAttribute('aria-controls')).toBe(screen.getByRole('navigation', { name: 'Navegación principal' }).id)
    expect(screen.getByRole('link', { name: 'Inicio' }).getAttribute('title')).toBe('Inicio')
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toBeTruthy()

    fireEvent.click(expandToggle)
    expect(header.classList.contains('is-collapsed')).toBe(false)
    expect(screen.getByRole('button', { name: 'Contraer navegación' }).getAttribute('aria-expanded')).toBe('true')
  })

  it('cycles home hero fonts with mouse, click, and supported keyboard keys', () => {
    render(
      <Home />,
    )

    const hero = screen.getByText(/Qué tal,/).closest('h1') as HTMLElement
    expect(hero.style.fontFamily).toBe('Poppins')

    fireEvent.mouseEnter(hero)
    expect(hero.style.fontFamily).toContain('Courier New')
    fireEvent.click(hero)
    expect(hero.style.fontFamily).toBe('Arial')

    fireEvent.keyDown(hero, { key: 'Enter' })
    expect(hero.style.fontFamily).toContain('Times New Roman')
    fireEvent.keyDown(hero, { key: ' ' })
    expect(hero.style.fontFamily).toBe('Verdana')

    fireEvent.keyDown(hero, { key: 'ArrowRight' })
    expect(hero.style.fontFamily).toBe('Verdana')
  })

  it('shows filtered repos and counts', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        generatedAt: '2026-07-02T00:00:00Z',
        source: 'github',
        repos: [
          { id: 1, name: 'alpha', html_url: 'https://example.com/a', description: 'alpha', language: 'Rust', updated_at: '2026-01-10T12:00:00Z', fork: false },
          { id: 2, name: 'beta', html_url: 'https://example.com/b', description: 'beta', language: 'TypeScript', updated_at: '2026-02-10T12:00:00Z', fork: false },
          { id: 3, name: 'gamma', html_url: 'https://example.com/c', description: null, language: null, updated_at: '2026-03-10T12:00:00Z', fork: false },
        ],
      }),
    }))

    render(<Proyectos />)
    expect(await screen.findByRole('link', { name: 'alpha' })).toBeTruthy()
    expect(screen.getByText('// sin descripción')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'otros' })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: 'rust' }))
    await waitFor(() => expect(screen.getByText('1 repositorio').textContent).toContain('1 repositorio'))
    fireEvent.click(screen.getByRole('button', { name: 'todos' }))
    await waitFor(() => expect(screen.getByText('3 repositorios').textContent).toContain('3 repositorios'))
  })

  it('shows http error and ignores late success after unmount', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({}),
    }))

    render(<Proyectos />)
    expect(await screen.findByText('// error: HTTP 404')).toBeTruthy()

    const resolveFetch = {} as { resolve?: (value: unknown) => void }
    vi.stubGlobal('fetch', vi.fn().mockImplementation(() => new Promise(resolve => { resolveFetch.resolve = resolve })))
    const view = render(<Proyectos />)
    view.unmount()
    resolveFetch.resolve?.({
      ok: true,
      json: async () => ({
        generatedAt: '2026-07-02T00:00:00Z',
        source: 'github',
        repos: [
          { id: 1, name: 'late', html_url: 'https://example.com/a', description: null, language: 'Rust', updated_at: '2026-01-10T12:00:00Z', fork: false },
        ],
      }),
    })
    await Promise.resolve()
    expect(true).toBeTruthy()
  })

  it('ignores late fetch rejection after unmount', async () => {
    let rejectFetch!: (reason?: unknown) => void
    vi.stubGlobal('fetch', vi.fn().mockImplementation(() => new Promise((_, reject) => { rejectFetch = reject })))

    const view = render(<Proyectos />)
    view.unmount()
    rejectFetch(new Error('late boom'))

    await Promise.resolve()
    expect(document.querySelector('.proy-error')).toBeNull()
  })

  it('shows loading, error, and empty states in proyectos', async () => {
    vi.stubGlobal('fetch', vi.fn().mockImplementation(() => new Promise(() => {})))
    const first = render(<Proyectos />)
    expect(first.container.querySelectorAll('.proy-skeleton').length).toBeGreaterThanOrEqual(3)
    first.unmount()

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('boom')))
    render(<Proyectos />)
    expect(await screen.findByText('// error: boom')).toBeTruthy()
    document.body.innerHTML = ''

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        generatedAt: '2026-07-02T00:00:00Z',
        source: 'github',
        repos: [],
      }),
    }))
    render(<Proyectos />)
    expect(await screen.findByText('// sin resultados para este filtro')).toBeTruthy()
  })

})
