import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/data.js";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Skills</span>
          <h2>A full stack, security-aware toolkit.</h2>
          <p>
            Grouped the way I actually use them — from core programming and
            frontend build-out to the security fundamentals behind my Cyber
            Security specialization.
          </p>
        </Reveal>

        <Reveal className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.category}>
              <div className="skill-row-label">
                <span className="bar" />
                {group.category}
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span
                    className={`skill-tag ${
                      item.includes("Learning") ? "learning" : ""
                    }`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
