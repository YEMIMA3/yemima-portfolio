import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    date: "2024 – Present",
    org: "SRKR Coding Club",
    title: "Executive Body Member — Design Lead",
    desc: "Led the Design Team in creating posters, UI designs, and promotional materials for the club. Contributed to organizing coding competitions, workshops, and technical events, and assisted in managing event flow during college fests.",
    color: "var(--accent)",
    tag: "Leadership",
  },
  {
    date: "Present",
    org: "Hridayam Hope Foundation (HHF)",
    title: "Content Writer",
    desc: "Created content for social campaigns, improving engagement and outreach for the NGO's initiatives. Contributed to digital communication strategy.",
    color: "var(--accent2)",
    tag: "Volunteering",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-inner">
      <div className="section-tag">Experience</div>
      <div className="section-title">Where I've contributed.</div>
      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={exp.title}>
            <div className="exp-line-col">
              <div className="exp-dot" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }} />
              {i < experiences.length - 1 && <div className="exp-line" />}
            </div>
            <div className="exp-meta">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-org" style={{ color: exp.color }}>{exp.org}</div>
              <span className="exp-tag" style={{ color: exp.color, borderColor: exp.color, background: `${exp.color}15` }}>{exp.tag}</span>
            </div>
            <div className="exp-content">
              <div className="exp-title">{exp.title}</div>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}