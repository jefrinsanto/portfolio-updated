import Reveal from "../components/Reveal.jsx";
import { certifications } from "../data/data.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Certifications</span>
          <h2>Verified learning.</h2>
        </Reveal>

        <Reveal className="cert-list">
          {certifications.map((cert, i) => (
            <div className="cert-item" key={cert}>
              <span className="name">{cert}</span>
              <span className="cert-index">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
