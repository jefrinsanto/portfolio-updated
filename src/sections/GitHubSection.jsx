import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/data.js";

export default function GitHubSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="github-panel">
          <div>
            <h2>Explore my code</h2>
            <p>
              My GitHub holds my Java and DSA practice alongside the web
              development projects listed here. It's the most current view of
              what I'm building and learning.
            </p>
            <div className="github-actions">
              <a
                className="btn btn-primary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
              <a
                className="btn btn-outline"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="github-stat-frame">
            <div className="line">$ git log --author="jefrinsanto"</div>
            <div className="path">→ Java &amp; DSA practice</div>
            <div className="path">→ Full stack web projects</div>
            <div className="path">→ Continuous, active commits</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
