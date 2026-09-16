import Reveal from "../components/Reveal.jsx";
import { education } from "../data/data.js";

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Education</span>
          <h2>Academic foundation.</h2>
        </Reveal>

        <div className="edu-grid">
          {education.map((edu) => (
            <Reveal as="div" className="edu-card" key={edu.degree}>
              <span className="date">{edu.date}</span>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <span className="cgpa">{edu.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
