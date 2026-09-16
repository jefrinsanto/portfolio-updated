import Reveal from "../components/Reveal.jsx";
import { dsaTopics, dsaEdges, profile } from "../data/data.js";

const topicById = Object.fromEntries(dsaTopics.map((t) => [t.id, t]));

export default function DSA() {
  return (
    <section id="dsa" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Data Structures &amp; Algorithms</span>
          <h2>Problem solving, mapped like a graph.</h2>
          <p>
            DSA is the core of how I approach engineering problems. These are
            the topics I actively practice and apply — connected, because
            that's how they actually build on each other.
          </p>
        </Reveal>

        <Reveal className="dsa-panel">
          <div className="dsa-graph" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              {dsaEdges.map(([a, b], i) => {
                const from = topicById[a];
                const to = topicById[b];
                if (!from || !to) return null;
                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                  />
                );
              })}
            </svg>

            {dsaTopics.map((topic) => (
              <div
                key={topic.id}
                className="dsa-node"
                style={{ left: `${topic.x}%`, top: `${topic.y}%` }}
              >
                <span className="dot" />
                {topic.label}
              </div>
            ))}
          </div>

          <ul className="dsa-list-mobile">
            {dsaTopics.map((topic) => (
              <li key={topic.id} className="skill-tag">
                {topic.label}
              </li>
            ))}
          </ul>

          <div className="dsa-footer">
            <div className="dsa-footer-info">
              <p>15 core topics in active practice</p>
              <div className="leetcode-stats">
                <span className="leetcode-stat">
                  <span className="dot" /> LeetCode
                </span>
                <span className="leetcode-stat">
                  {profile.leetcodeStats.solved} Problems Solved
                </span>
                <span className="leetcode-stat">
                  {profile.leetcodeStats.language}
                </span>
              </div>
            </div>
            <div className="dsa-footer-actions">
              <a
                className="btn btn-primary"
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                View LeetCode Profile
              </a>
              <a
                className="btn btn-outline"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View My DSA Solutions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
