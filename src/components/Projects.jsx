import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    badge: "Live",
    badgeType: "live",
    number: "01",
    title: "Ayur Cure",
    subtitle: "Ayur Cure Within Reach",
    desc: "Full stack web platform offering traditional Ayurvedic home remedies as an alternative to modern medicine. Features disease-based search, step-by-step treatment guidance, and an integrated external AI API for personalized remedy suggestions.",
    stack: ["Vue.js","CSS", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/YEMIMA3/AyurCure",
    live: "#",
    accent: "var(--accent2)",
    gradClass: "card-grad--teal",
  },
  {
    badge: "In Progress",
    badgeType: "wip",
    number: "02",
    title: "AI Career Guide",
    subtitle: "AI-Powered Career Guidance Platform",
    desc: "AI-driven platform that recommends career roles based on user skills and resume data. Uses spaCy for entity extraction to identify skill gaps and suggest targeted upskilling paths. Backed by scalable ML recommendation systems.",
    stack: ["React", "Tailwind", "FastAPI", "Python", "spaCy", "scikit-learn", "MongoDB"],
    github: "#",
    live: null,
    accent: "var(--accent4)",
    gradClass: "card-grad--pink",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-inner">
      <div className="section-tag">Work</div>
      <div className="section-title">Things I've built.</div>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className={`proj-card ${proj.gradClass}`} key={proj.title}>
            <div className="proj-card-top">
              <span className="proj-number">{proj.number}</span>
              <div className={`proj-badge proj-badge--${proj.badgeType}`}>
                <span className="badge-dot" />
                {proj.badge}
              </div>
            </div>
            <h3 className="proj-title">{proj.title}</h3>
            <p className="proj-subtitle">{proj.subtitle}</p>
            <p className="proj-desc">{proj.desc}</p>
            <div className="proj-stack">
              {proj.stack.map((tech) => (
                <span className="stack-tag" key={tech}>{tech}</span>
              ))}
            </div>
            <div className="proj-links">
              <a href={proj.github} className="proj-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2.01c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              {proj.live && (
                <a href={proj.live} className="proj-link proj-link--live">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}