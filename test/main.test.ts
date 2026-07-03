import { vi, describe, it, expect } from 'vitest'

describe('main entry', () => {
  it('mounts the app on #root', async () => {
    document.body.innerHTML = '<div id="root"></div>'
    const render = vi.fn()
    const createRoot = vi.fn(() => ({ render }))

    vi.doMock('react-dom/client', () => ({ createRoot }))
    await import('../src/main')

    expect(createRoot).toHaveBeenCalledTimes(1)
    expect(render).toHaveBeenCalledTimes(1)
  })
})
