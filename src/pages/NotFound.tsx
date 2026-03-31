import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="nf-root">
      <div className="nf-grid" aria-hidden="true" />

      <div className="nf-center">
        <p className="nf-eyebrow">Error de navegación</p>

        <h1 className="nf-number" aria-label="404">
          <span data-char="4">4</span>
          <span data-char="0">0</span>
          <span data-char="4">4</span>
        </h1>

        <p className="nf-message">
          Lo que buscas <em>ya no está</em> o quizás nunca existió...
        </p>

        <Link to="/" className="nf-btn">
          <span className="nf-arrow">←</span> Volver al inicio
        </Link>
      </div>
    </main>
  )
}