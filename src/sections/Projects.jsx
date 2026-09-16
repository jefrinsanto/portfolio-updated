import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/data.js";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Projects</span>
          <h2>Work that shows how I build.</h2>
          <p>
            From responsive front-end builds to an enterprise-style React
            interface and a hands-on security internship.
          </p>
        </Reveal>

        <div>
          {projects.map((project) => (
            <Reveal as="div" className="project-row" key={project.title}>
              <div className="project-meta-col">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  onClick={(e) => {
                    if (project.link === "#") e.preventDefault();
                  }}
                >
                  {project.linkLabel} →
                </a>
              </div>

              <div className="project-body">
                <p>{project.description}</p>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
