import React, { useState, useMemo } from 'react';
import { contenidoOriginal, BloqueCarta } from './contenidoCarta';
import './Ale.css';

export default function Ale() {
  const LIMITE_PALABRAS = 150; 

  const paginas = useMemo(() => {
    const listaPaginas: BloqueCarta[][] = [[]];
    let indicePagina = 0;
    let palabrasEnPaginaActual = 0;

    contenidoOriginal.forEach((bloque) => {
      // CONDICIÓN EXPANDIDA: Si es pixel art O imagen, va al final y salta de página
      if (bloque.tipo === 'pixel-art' || bloque.tipo === 'imagen' || bloque.tipo === 'vectorial') {
        listaPaginas[indicePagina].push(bloque);
        listaPaginas.push([]);
        indicePagina++;
        palabrasEnPaginaActual = 0;
      } else {
        const cantidadPalabras = bloque.contenido.split(/\s+/).length;

        if (palabrasEnPaginaActual + cantidadPalabras > LIMITE_PALABRAS && palabrasEnPaginaActual > 0) {
          listaPaginas.push([]);
          indicePagina++;
          palabrasEnPaginaActual = 0;
        }

        listaPaginas[indicePagina].push(bloque);
        palabrasEnPaginaActual += cantidadPalabras;
      }
    });

    return listaPaginas.filter(p => p.length > 0);
  }, []);

  const [paginaActual, setPaginaActual] = useState(0);
  const esUltimaPagina = paginaActual === paginas.length - 1;

  const irAPaginaAnterior = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  const irAPaginaSiguiente = () => {
    if (paginaActual < paginas.length - 1) setPaginaActual(paginaActual + 1);
  };

  return (
    <div className="ale-screen-wrapper">
      <div className="ale-bg-gothic-left" aria-hidden="true">
        <span>†</span><span>‡</span><span>†</span><span>‡</span><span>†</span>
      </div>
      <div className="ale-bg-gothic-right" aria-hidden="true">
        <span>†</span><span>‡</span><span>†</span><span>‡</span><span>†</span>
      </div>

      <article className="ale-letter">
        <div className="ale-envelope" aria-hidden="true">
          {/* Esquina TL */}
          <svg className="ale-corner-svg ale-corner-svg--tl" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,62 Q0,0 62,0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
            <path d="M10,57 Q10,10 57,10" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
            <path d="M24,0 Q16,0 10,8 Q6,14 10,20 Q14,26 22,22 Q28,18 24,12 Q20,8 16,12" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" fill="none"/>
            <path d="M0,24 Q0,16 8,10 Q14,6 20,10 Q26,14 22,22 Q18,28 12,24 Q8,20 12,16" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none"/>
            <circle cx="29" cy="29" r="2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
            <circle cx="29" cy="29" r="0.8" fill="rgba(255,255,255,0.25)"/>
            <text x="2" y="11" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,0.45)">†</text>
          </svg>

          {/* Esquina TR */}
          <svg className="ale-corner-svg ale-corner-svg--tr" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80,62 Q80,0 18,0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
            <path d="M70,57 Q70,10 23,10" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
            <path d="M56,0 Q64,0 70,8 Q74,14 70,20 Q66,26 58,22 Q52,18 56,12 Q60,8 64,12" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" fill="none"/>
            <path d="M80,24 Q80,16 72,10 Q66,6 60,10 Q54,14 58,22 Q62,28 68,24 Q72,20 68,16" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none"/>
            <circle cx="51" cy="29" r="2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
            <circle cx="51" cy="29" r="0.8" fill="rgba(255,255,255,0.25)"/>
            <text x="67" y="11" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,0.45)">†</text>
          </svg>

          {/* Esquina BL */}
          <svg className="ale-corner-svg ale-corner-svg--bl" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,18 Q0,80 62,80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
            <path d="M10,23 Q10,70 57,70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
            <path d="M24,80 Q16,80 10,72 Q6,66 10,60 Q14,54 22,58 Q28,62 24,68 Q20,72 16,68" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" fill="none"/>
            <path d="M0,56 Q0,64 8,70 Q14,74 20,70 Q26,66 22,58 Q18,52 12,56 Q8,60 12,64" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none"/>
            <circle cx="29" cy="51" r="2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
            <circle cx="29" cy="51" r="0.8" fill="rgba(255,255,255,0.25)"/>
            <text x="2" y="78" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,0.45)">†</text>
          </svg>

          {/* Esquina BR */}
          <svg className="ale-corner-svg ale-corner-svg--br" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80,18 Q80,80 18,80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
            <path d="M70,23 Q70,70 23,70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6"/>
            <path d="M56,80 Q64,80 70,72 Q74,66 70,60 Q66,54 58,58 Q52,62 56,68 Q60,72 64,68" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" fill="none"/>
            <path d="M80,56 Q80,64 72,70 Q66,74 60,70 Q54,66 58,58 Q62,52 68,56 Q72,60 68,64" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none"/>
            <circle cx="51" cy="51" r="2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
            <circle cx="51" cy="51" r="0.8" fill="rgba(255,255,255,0.25)"/>
            <text x="67" y="78" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,0.45)">†</text>
          </svg>

          {/* Ornamento lateral izquierdo */}
          <svg className="ale-side-ornament ale-side-ornament--left" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8,0 Q2,6 2,12 Q2,18 8,24" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
            <path d="M8,4 Q4,8 4,12 Q4,16 8,20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <circle cx="8" cy="12" r="1.5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" fill="none"/>
            <circle cx="8" cy="12" r="0.6" fill="rgba(255,255,255,0.2)"/>
          </svg>

          {/* Ornamento lateral derecho */}
          <svg className="ale-side-ornament ale-side-ornament--right" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8,0 Q14,6 14,12 Q14,18 8,24" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
            <path d="M8,4 Q12,8 12,12 Q12,16 8,20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <circle cx="8" cy="12" r="1.5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" fill="none"/>
            <circle cx="8" cy="12" r="0.6" fill="rgba(255,255,255,0.2)"/>
          </svg>
        </div>

        <div className="ale-paper">
          <header className="ale-header">
            <time className="ale-date" dateTime="2026-06-10">
              ✦ 10 de junio, 2026 ~ Para Alexa ✦
            </time>
            <div className="ale-page-counter">† {paginaActual + 1} / {paginas.length} †</div>
          </header>

          {paginaActual === 0 && <p className="ale-saludo">Querida Ale,</p>}

          <div className="ale-body">
            {paginas[paginaActual]?.map((bloque, index) => {
              if (bloque.tipo === 'texto') {
                return <p key={index}>{bloque.contenido}</p>;
              } else if (bloque.tipo === 'pixel-art') {
                return (
                  <figure key={index} className="ale-pixel-figure" aria-label="decoración pixel">
                    <pre className="ale-pixel-art">{bloque.contenido}</pre>
                  </figure>
                );
              } else {
                // RENDER DE LA IMAGEN / GIF
                return (
                  <figure key={index} className="ale-image-figure">
                    <img 
                      src={bloque.contenido} 
                      alt="Carta decorativa" 
                      className="ale-carta-img" 
                    />
                  </figure>
                );
              }
            })}
          </div>

          {esUltimaPagina ? (
            <footer className="ale-footer">
              <p className="ale-closing">Con todo mi cariño,</p>
              <p className="ale-signature">— Enzo</p>
              <p className="ale-ps">
                P.D. <span className="ale-pixel-inline">★</span> Sí, me llamo Enzo también, Te amo mucho
              </p>
            </footer>
          ) : (
            <div className="ale-footer-space" />
          )}

          <div className="ale-pagination-controls">
            <button 
              onClick={irAPaginaAnterior} 
              className={`ale-page-btn ${paginaActual === 0 ? 'is-disabled' : ''}`}
              disabled={paginaActual === 0}
            >
              ◀ <span>[ant]</span>
            </button>
            <div className="ale-divider-dots">❖  ❖  ❖</div>
            <button 
              onClick={irAPaginaSiguiente} 
              className={`ale-page-btn ${esUltimaPagina ? 'is-disabled' : ''}`}
              disabled={esUltimaPagina}
            >
              <span>[sig]</span> ▶
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
