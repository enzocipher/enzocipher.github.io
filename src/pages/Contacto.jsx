export default function Contacto() {
  const channels = [
    {
      label: 'email',
      icon: '✉',
      value: 'enzocipher@gmail.com',
      note: 'respuesta en ~24h',
      href: 'mailto:enzocipher@gmail.com',
      accent: '#E8593C',
    },
    {
      label: 'github',
      icon: '⌥',
      value: 'enzocipher',
      note: 'proyectos y repos',
      href: 'https://github.com/enzocipher',
      accent: '#b6a6ca',
    },
    {
      label: 'hackthebox',
      icon: '⬡',
      value: 'enzocipher',
      note: 'CTF · CJCA incoming',
      href: 'https://app.hackthebox.com/users/2210479',
      accent: '#9FE1CB',
    },
  ]

  return (
    <section className="c-contact fade-in">
      <p className="c-eyebrow">~/contacto</p>
      <h2 className="c-title">Hablemos</h2>
      <p className="c-sub">Estoy disponible para proyectos, colaboraciones y consultas.</p>

      <div className="c-grid">
        {channels.map(ch => (
          <a
            key={ch.label}
            className="c-channel"
            href={ch.href}
            target={ch.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{ '--cl': ch.accent }}
          >
            <div className="c-ch-icon">{ch.icon}</div>
            <span className="c-ch-label">{ch.label}</span>
            <span className="c-ch-value">{ch.value}</span>
            <span className="c-ch-note">{ch.note}</span>
          </a>
        ))}
      </div>

      <div className="c-availability">
        <div className="c-dot" />
        <div className="c-avail-text">
          <p>Disponible</p>
          <p>lunes – viernes · Lima, Perú (GMT-5)</p>
        </div>
      </div>
    </section>
  )
}