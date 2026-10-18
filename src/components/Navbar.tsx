import React, { useId, useState } from "react";
import { Link } from "preact-router/match";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const menuId = useId();
  const navigationId = useId();
  const closeMenu = () => setOpen(false);
  return (
    <header className={`site-navigation ${collapsed ? "is-collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        type="button"
        aria-label={collapsed ? "Expandir navegación" : "Contraer navegación"}
        aria-expanded={!collapsed}
        aria-controls={navigationId}
        onClick={() => setCollapsed((value) => !value)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {collapsed ? <path d="m9 18 6-6-6-6" /> : <path d="m15 18-6-6 6-6" />}
        </svg>
      </button>
      <nav
        id={navigationId}
        className="navbar"
        aria-label="Navegación principal"
        onKeyDown={(event) => {
          if (event.key === "Escape") closeMenu();
        }}
      >
        <Link className="logo" href="/">
          <span className="logo-text">EnzoCipher</span>
        </Link>
        <ul id={menuId} className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link href="/" title={collapsed ? "Inicio" : undefined} activeClassName="active" onClick={closeMenu}>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 10 9-7 9 7" />
                <path d="M5 9v12h14V9M9 21v-7h6v7" />
              </svg>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="/sobre-mi" title={collapsed ? "Sobre mí" : undefined} activeClassName="active" onClick={closeMenu}>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0M18 4a4 4 0 0 1 0 8M20 15a7 7 0 0 1 3 6" />
              </svg>
              <span>Sobre mí</span>
            </Link>
          </li>
          <li>
            <Link
              href="/proyectos"
              title={collapsed ? "Proyectos" : undefined}
              activeClassName="active"
              onClick={closeMenu}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7h7l2 2h9v11H3z" />
                <path d="M3 7V5h7l2 2" />
              </svg>
              <span>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link href="/contacto" title={collapsed ? "Contacto" : undefined} activeClassName="active" onClick={closeMenu}>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>Contacto</span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/enzocipher"
              title={collapsed ? "GitHub" : undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6a4.3 4.3 0 0 0-.1-3S17 2.7 14 4.5a13 13 0 0 0-6 0C5 2.7 3.7 3 3.7 3A4.3 4.3 0 0 0 3.6 6 4.7 4.7 0 0 0 2.3 9.2c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 7 17.5V21" />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/enzo-favio-o-besso-93409b335"
              title={collapsed ? "LinkedIn" : undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 10v7M8 7h.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menu"}
        </button>
      </nav>
    </header>
  );
}
