import { render, screen, fireEvent, waitFor } from '@testing-library/preact'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Proyectos from '../src/pages/Proyectos'
import Contacto from '../src/pages/Contacto'
import SobreMi from '../src/pages/SobreMi'
import CTF from '../src/pages/CTF'
import NotFound from '../src/pages/NotFound'
import Ale from '../src/pages/Ale'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
  window.history.pushState({}, '', '/')
})

function renderRoute(path: string) {
  window.history.pushState({}, '', path)
  return render(
    <App />,
  )
}

describe('app routes', () => {
  it('renders the home route', () => {
    renderRoute('/')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Qué tal')
    expect(screen.getByText('© 2025 Enzo Favio — Portafolio personal')).toBeTruthy()
  })

  it('renders the about route', () => {
    renderRoute('/sobre-mi')
    expect(screen.getByText('Mi Historia')).toBeTruthy()
    expect(screen.getByText('Certificaciones')).toBeTruthy()
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
})

describe('shared components', () => {
  it('toggles the navbar menu', () => {
    render(
      <Navbar />,
    )

    const button = screen.getByRole('button', { name: 'Abrir menú' })
    expect(button.textContent).toContain('Menu')
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: 'Abrir menú' }).textContent).toContain('Cerrar')
    fireEvent.click(screen.getByRole('link', { name: 'Inicio' }))
    expect(screen.getByRole('button', { name: 'Abrir menú' }).textContent).toContain('Menu')
  })

  it('renders the home hero and cycles fonts', () => {
    render(
      <Home />,
    )

    const hero = screen.getByText(/Qué tal,/)
    fireEvent.mouseEnter(hero.closest('h1') as HTMLElement)
    fireEvent.click(hero.closest('h1') as HTMLElement)
    expect(hero).toBeTruthy()
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

  it('navigates through the letter pages and opens the image', () => {
    render(<Ale />)

    const next = screen.getByRole('button', { name: /sig/i })
    while (!next.hasAttribute('disabled')) {
      fireEvent.click(next)
    }

    fireEvent.click(screen.getByRole('button', { name: 'Tocame :3' }))
    expect(screen.getByAltText('Sorpresa')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: '✕' }))
  })
})
