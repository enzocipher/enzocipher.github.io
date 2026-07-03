import { render, screen, fireEvent } from '@testing-library/preact'
import { afterEach, describe, expect, it, vi } from 'vitest'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

describe('ale page special blocks', () => {
  it('clamps previous and next page helpers', async () => {
    const ale = await import('../src/pages/Ale')
    expect(ale.getPaginaAnterior(0)).toBe(0)
    expect(ale.getPaginaAnterior(2)).toBe(1)
    expect(ale.getPaginaSiguiente(0, 3)).toBe(1)
    expect(ale.getPaginaSiguiente(2, 3)).toBe(2)
  })

  it('renders pixel art pages and previous navigation', async () => {
    vi.resetModules()
    vi.doMock('../src/pages/contenidoCarta', () => ({
      contenidoOriginal: [
        { tipo: 'texto', contenido: 'intro' },
        { tipo: 'pixel-art', contenido: ':-)' },
        { tipo: 'vectorial', contenido: '<svg />' },
      ],
    }))

    const { default: Ale } = await import('../src/pages/Ale')
    render(<Ale />)

    expect(screen.getByText('intro')).toBeTruthy()
    expect(screen.getByText(':-)')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /\[sig\]/i }))
    expect(screen.getByAltText('Carta decorativa')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /\[ant\]/i }))
    expect(screen.getByText('intro')).toBeTruthy()
  })
})
