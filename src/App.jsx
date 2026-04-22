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

  const getDownloadProps = (url, fileName) => {
    const isLocalFile = typeof url === 'string' && url.startsWith('/')
    return isLocalFile ? { download: fileName || true } : {}
  }

  const { profile, skills, projects } = portfolioData

  const shootingStars = [
    { top: '10%', delay: '1s', duration: '15s' },
    { top: '18%', delay: '5s', duration: '13s' },
    { top: '26%', delay: '9s', duration: '14s' },
    { top: '34%', delay: '2.5s', duration: '16s' },
    { top: '46%', delay: '7.5s', duration: '12s' },
    { top: '58%', delay: '11s', duration: '15s' },
  ]

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <div className="aurora-layer aurora-layer-one"></div>
        <div className="aurora-layer aurora-layer-two"></div>
        <div className="aurora-layer aurora-layer-three"></div>

        <div className="shooting-stars">
          {shootingStars.map((star) => (
            <span
              className="shooting-star"
              key={`${star.top}-${star.delay}`}
              style={{
                '--top': star.top,
                '--delay': star.delay,
                '--duration': star.duration,
              }}
            ></span>
          ))}
        </div>
      </div>

      <div className="page-shell">
        <header className="topbar">
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">
              {profile.brandImage ? (
                <img src={profile.brandImage} alt="" />
              ) : (
                profile.initials
              )}
            </span>
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
              <span className="eyebrow">Dev fullstack em evolucao</span>
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
                {profile.resumeUrl ? (
                  <a
                    className="button button-secondary"
                    href={profile.resumeUrl}
                    {...getExternalLinkProps(profile.resumeUrl)}
                    {...getDownloadProps(profile.resumeUrl, profile.resumeFileName)}
                  >
                    Download CV
                  </a>
                ) : null}
              </div>
            </article>

            <aside className="section-card hero-panel reveal delay-1">
              <p className="panel-label">Resumo rapido</p>

              <div className="panel-grid">
                <article className="panel-chip">
                  <span>Base</span>
                  <strong>{profile.mainStack}</strong>
                  <small>Node.js, Express, React e APIs.</small>
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
              title="Tecnologias e Ferramentas que trabalho"
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
    </>
  )
}

export default App
