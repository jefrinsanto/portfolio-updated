import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/data.js";

const icons = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6.5l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 00-3.32 20.47c.53.1.72-.23.72-.51v-1.98c-2.92.63-3.54-1.23-3.54-1.23-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.27-4.79-1.17-4.79-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.35.1-2.81 0 0 .88-.28 2.88 1.08a10 10 0 015.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.54.1 2.81.67.73 1.08 1.67 1.08 2.82 0 4.04-2.47 4.92-4.82 5.18.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0012 1.5z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5zM5.25 3.2a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20.4h-3.37v-6.06c0-1.44-.03-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2v6.16H9.36V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.06 2.26 4.06 5.2v6.84z" />
    </svg>
  ),
  leetcode: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9.5 6.5l-5 5.5 5 5.5M14.5 6.5l5 5.5-5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Contact</span>
          <h2>Let's talk about the role.</h2>
          <p>
            Open to Software Engineer Intern opportunities, including the EA
            Slingshot Studios internship. Reach out through any channel below.
          </p>
        </Reveal>

        <Reveal className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="icon">{icons.mail}</span>
            <span className="label">Email</span>
            <span className="value">{profile.email}</span>
          </a>

          <a
            className="contact-card"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{icons.github}</span>
            <span className="label">GitHub</span>
            <span className="value">github.com/jefrinsanto</span>
          </a>

          <a
            className="contact-card"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{icons.linkedin}</span>
            <span className="label">LinkedIn</span>
            <span className="value">jefrin-santo-sv-577716332</span>
          </a>

          <a
            className="contact-card"
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{icons.leetcode}</span>
            <span className="label">LeetCode</span>
            <span className="value">leetcode.com/u/JefrinSanto</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
