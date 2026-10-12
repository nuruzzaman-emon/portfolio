import Reveal from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="section wrap" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">Projects</h2>
      <ol className="section-body changelog">
        {projects.map((project, index) => (
          <Reveal as="li" className="release" key={project.title} style={{ "--i": index }}>
            <div className="release-meta">
              <span className="release-version">{project.version}</span>
            </div>
            <article className="release-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="chips" aria-label="Tech used">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p className="release-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className={`link-btn${link.primary ? " link-btn-primary" : ""}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
