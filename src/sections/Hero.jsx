import { profile } from "../data/data.js";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="220" stroke="#5EEAD4" strokeOpacity="0.12" />
          <circle cx="300" cy="300" r="160" stroke="#5EEAD4" strokeOpacity="0.1" />
          <path
            d="M120 420 L220 340 L300 380 L420 220"
            stroke="#5EEAD4"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">
            <span className="dot" />
            Open to Software Engineer Internships
          </span>

          <h1>
            Hi, I'm <span>Jefrin Santo</span>
          </h1>

          <p className="hero-role">{profile.subHeadline}</p>

          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn btn-outline"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <a
              className="btn btn-outline"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>B.E. CSE (Cyber Security)</strong>
              <span>St. Joseph's College of Engineering · 2028</span>
            </div>
            <div>
              <strong>Based in</strong>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src={profileImg} alt="Jefrin Santo SV" />
          </div>
          <span className="portrait-corner tl" aria-hidden="true" />
          <span className="portrait-corner br" aria-hidden="true" />
          <span className="portrait-tag">Jefrin Santo SV</span>
        </div>
      </div>
    </section>
  );
}
