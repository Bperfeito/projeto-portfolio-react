import './App.css'
import { portfolioData } from './data/portfolioData'

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function App() {
  const getExternalLinkProps = (url) => {
    const isExternalUrl = typeof url === 'string' && /^https?:\/\//.test(url)
    return isExternalUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  }

  const {
    profile,
    highlights,
    skills,
    projects,
  } = portfolioData

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark">{profile.initials}</span>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </a>

        <nav className="nav" aria-label="Navegacao principal">
          <a href="#inicio">Inicio</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <article className="section-card hero-copy reveal">
            <span className="eyebrow">Portfolio fullstack em evolucao</span>
            <p className="hero-kicker">Node.js, Express, React e APIs</p>

            <h1>
              {profile.name}
              <span>{profile.role}</span>
            </h1>
            <p className="hero-description">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver Projetos
              </a>
              <a className="button button-secondary" href="#contato">
                Contato
              </a>
            </div>

            <ul className="stats-grid">
              {highlights.map((highlight) => (
                <li key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="section-card hero-panel reveal delay-1">
            <p className="panel-label">Resumo rapido</p>

            <div className="panel-grid">
              <article className="panel-chip">
                <span>Base</span>
                <strong>{profile.mainStack}</strong>
                <small>Stack principal em desenvolvimento continuo.</small>
              </article>

              <article className="panel-chip">
                <span>Local</span>
                <strong>{profile.location}</strong>
                <small>Aberto a oportunidades remotas e presenciais.</small>
              </article>

              <article className="panel-chip">
                <span>Objetivo</span>
                <strong>Primeira vaga na area</strong>
                <small>Foco em evoluir com projetos reais e feedback.</small>
              </article>

              <article className="panel-chip">
                <span>Status</span>
                <strong>{profile.availability}</strong>
                <small>Disponivel para estagio ou posicao junior.</small>
              </article>
            </div>
          </aside>
        </section>

        <section className="section-card" id="habilidades">
          <SectionTitle
            eyebrow="Habilidades"
            title="Tecnologias que ja pratico"
            description="Lista inicial com foco em fundamentos front-end e back-end para consolidar a base fullstack."
          />

          <div className="skills-grid">
            <div className="skills-cloud">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <aside className="focus-card">
              <h3>{profile.role}</h3>
              <p>{profile.focus}</p>

              <dl className="focus-list">
                <div>
                  <dt>Local</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{profile.availability}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section-card" id="projetos">
          <SectionTitle
            eyebrow="Projetos"
            title="Projetos para demonstrar evolucao tecnica"
            description="Cada card mostra stack, contexto e o principal resultado de cada projeto."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-status">{project.status}</span>
                  <a href={project.link} {...getExternalLinkProps(project.link)}>
                    {project.linkLabel || 'Abrir'}
                  </a>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {project.result ? (
                  <strong className="project-result">{project.result}</strong>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-card contact-section" id="contato">
          <div className="contact-copy">
            <span className="eyebrow">Contato</span>
            <h2>Entre em contato comigo!</h2>
            <p>{profile.contactMessage}</p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={profile.email}>
              Enviar email
            </a>
            <a
              className="button button-secondary"
              href={profile.github}
              {...getExternalLinkProps(profile.github)}
            >
              GitHub
            </a>
            <a
              className="button button-secondary"
              href={profile.linkedin}
              {...getExternalLinkProps(profile.linkedin)}
            >
              LinkedIn
            </a>
            {profile.instagram ? (
              <a
                className="button button-secondary"
                href={profile.instagram}
                {...getExternalLinkProps(profile.instagram)}
              >
                Instagram
              </a>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
