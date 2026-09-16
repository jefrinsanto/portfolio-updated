import Reveal from "../components/Reveal.jsx";
import { about } from "../data/data.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">About</span>
          <h2>Grounded in fundamentals, building toward full stack.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about-highlights">
            <h3>core.focus</h3>
            <ul>
              {about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
