import Reveal from "../components/Reveal.jsx";
import { currentlyLearning, exploring } from "../data/data.js";

export default function Learning() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Currently Learning</span>
          <h2>In progress, not yet claimed as a skill.</h2>
          <p>
            Kept separate from confirmed skills on purpose — these are areas
            I'm actively building toward.
          </p>
        </Reveal>

        <Reveal className="learn-grid">
          {currentlyLearning.map((item) => (
            <div className="learn-card" key={item}>
              <span className="pulse" />
              {item}
            </div>
          ))}
        </Reveal>

        <Reveal className="exploring-note">
          <h3>interested-in-exploring.md</h3>
          <ul>
            {exploring.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
