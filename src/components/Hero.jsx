import React from "react";
import profile from "../assets/profile.jpeg";
import "../styles/Hero.css";

const stats = [
  { num: "8.94", label: "CGPA", color: "var(--accent)" }
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <div className="hero-layout">
        {/* Left — text content */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            <span className="hero-name-plain">Natha</span>
            <span className="hero-name-grad"> Yemima.</span>
          </h1>

          <p className="hero-role">Full Stack Developer &amp; AI Enthusiast</p>

          <p className="hero-sub">
            B.Tech CSE at SRKR Engineering College — building projects
            that solve real-world problems with clean code and creative thinking.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>

          <div className="hero-stats">
            {stats.map(({ num, label, color }) => (
              <div key={label} className="hero-stat">
                <div className="stat-num" style={{ color }}>{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — profile image */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <div className="hero-img-ring hero-img-ring--1" />
            <div className="hero-img-ring hero-img-ring--2" />
            <div className="hero-img-blob" />
            <img
              src={profile} 
              alt="Natha Yemima"
              className="hero-img"
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
            />
            {/* Fallback avatar if image not found */}
            <div className="hero-img-fallback" style={{ display: "none" }}>
              <span>NY</span>
            </div>
          </div>

          {/* Floating badge */}
          <div className="hero-badge hero-badge--1">
            <span className="badge-emoji">⚡</span>
            <span>Full Stack Dev</span>
          </div>
          <div className="hero-badge hero-badge--2">
            <span className="badge-emoji">🤖</span>
            <span>AI Enthusiast</span>
          </div>
        </div>
      </div>
    </section>
  );
}