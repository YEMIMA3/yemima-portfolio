import React from "react";
import "../styles/Achievements.css";

const achievements = [
  {
    icon: "⭐",
    title: "Academic Excellence — 8.94 CGPA",
    desc: "Consistently maintained a high CGPA of 8.94 across all semesters at SRKR Engineering College while simultaneously working on real-world projects.",
    color: "var(--accent3)",
    grad: "var(--grad2)",
    year: "2023–Now",
  },
  {
    icon: "🚀",
    title: "Amazon Future Engineer — Phase 2",
    desc: "Selected for the AFE Bootcamp (10 months) and advanced to Phase 2 through performance-based evaluation out of a large national cohort.",
    color: "var(--accent)",
    grad: "var(--grad1)",
    year: "2024",
  },
  {
    icon: "🧠",
    title: "DSA & Algorithms Proficiency",
    desc: "Strengthened foundational knowledge in Data Structures and Algorithms through intensive training, practice on LeetCode, HackerRank, and GeeksforGeeks.",
    color: "var(--accent4)",
    grad: "var(--grad4)",
    year: "Ongoing",
  },
  {
    icon: "🏆",
    title: "SRKR Coding Club — Design Lead",
    desc: "Appointed as Executive Body Member and Design Lead, overseeing all visual communications and event branding for the college's premier tech club.",
    color: "var(--accent2)",
    grad: "var(--grad3)",
    year: "2026",
  },
  
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-inner">
      <div className="section-tag">Achievements</div>
      <div className="section-title">Milestones &amp;<br />proud moments.</div>
      <div className="ach-grid">
        {achievements.map((ach, i) => (
          <div className="ach-card" key={i} style={{ "--ach-color": ach.color }}>
            <div className="ach-top">
              <div className="ach-icon-wrap" style={{ background: `${ach.color}18`, border: `1px solid ${ach.color}30` }}>
                <span className="ach-icon">{ach.icon}</span>
              </div>
              <span className="ach-year" style={{ color: ach.color, background: `${ach.color}12`, border: `1px solid ${ach.color}25` }}>
                {ach.year}
              </span>
            </div>
            <h3 className="ach-title">{ach.title}</h3>
            <p className="ach-desc">{ach.desc}</p>
            <div className="ach-bar" style={{ background: ach.grad }} />
          </div>
        ))}
      </div>
    </section>
  );
}