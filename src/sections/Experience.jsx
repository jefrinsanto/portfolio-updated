import Reveal from "../components/Reveal.jsx";
import { experience } from "../data/data.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Experience</span>
          <h2>Hands-on time in security and frontend engineering.</h2>
        </Reveal>

        <Reveal className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.company}>
              <span className="timeline-node" aria-hidden="true" />
              <span className="timeline-date">{item.date}</span>
              <h3>{item.company}</h3>
              <p className="role">
                {item.role} · {item.location}
              </p>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
