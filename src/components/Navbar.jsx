import { useEffect, useState } from "react";
import { nav, profile } from "../data/data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={handleNavClick}>
          <span className="brand-mark">JS</span>
          Jefrin Santo
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a
            className="btn btn-ghost"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a className="btn btn-primary" href="#contact">
            Contact Me
          </a>
        </div>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
        <div className="mobile-menu-cta">
          <a
            className="btn btn-outline"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            Download Resume
          </a>
          <a className="btn btn-primary" href="#contact" onClick={handleNavClick}>
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
