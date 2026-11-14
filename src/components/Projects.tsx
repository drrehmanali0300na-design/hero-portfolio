import Image from "next/image";
import { PROJECTS } from "@/lib/profile";
import Icon from "./Icons";

/**
 * Featured projects — exactly six cards.
 * Demo / GitHub URLs are editable placeholders (see src/lib/profile.ts):
 * they intentionally point to non-working placeholder destinations until
 * you replace them with your real links.
 */
export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">03 · Featured Projects</p>
          <h2 className="section-title">
            Work I&apos;m <span className="text-accent">Proud Of</span>
          </h2>
          <p className="section-text section-head-text">
            A selection of six projects spanning business sites, SaaS platforms,
            e-commerce, AI tooling and desktop applications.
          </p>
        </div>

        <div className="row g-4">
          {PROJECTS.map((project, i) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.id}
              data-reveal
              data-reveal-delay={String((i % 3) * 110)}
            >
              <article className="project-card h-100">
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={`${project.name} — project preview`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="project-img"
                  />
                  <span className="project-num">{project.id}</span>
                </div>

                <div className="project-body">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>

                  <ul className="tag-list" aria-label={`Technologies used in ${project.name}`}>
                    {project.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-x btn-x-outline btn-x-sm"
                      title="Placeholder link — replace with your GitHub repository URL"
                    >
                      <Icon name="github" size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
