import { profile } from "../data/data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Jefrin Santo SV. Built with React.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
