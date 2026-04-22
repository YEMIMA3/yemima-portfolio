import React from "react";
import "../styles/About.css";

const details = [
  {
    label: "Degree",
    value: "B.Tech CSE — 2023 to 2027",
    grad: "var(--grad1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Bhimavaram, Andhra Pradesh",
    grad: "var(--grad3)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "yemimanathaa@gmail.com",
    grad: "var(--grad2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "8019537876",
    grad: "var(--grad4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.42 3.26 2 2 0 0 1 3.4 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 5.72 5.72l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 14.92z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-inner">
      <div className="section-tag">About me</div>
      <div className="section-title">
        The person<br />behind the code.
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Computer Science &amp; Engineering student</strong> at
            SRKR Engineering College, Bhimavaram, Andhra Pradesh — graduating in
            2027 with a CGPA of 8.94.
          </p>
          <p>
            With a strong interest in <strong>frontend development</strong>, I
            love crafting modern, interactive user experiences. I also work with{" "}
            <strong>full-stack technologies</strong> to build complete, scalable
            web applications.
          </p>
          <p>
            I'm also an active member of the <strong>SRKR Coding Club</strong>{" "}
            executive body, where I lead design and contribute to organizing
            technical events and workshops.
          </p>
        </div>
        <div className="about-details">
          {details.map(({ label, value, icon, grad }) => (
            <div className="detail-row" key={label}>
              <div className="detail-icon" style={{ background: `${grad.replace('var(--grad', 'rgba(124,110,240,').replace(')', ',0.15)')}` }}>
                <div className="detail-icon-inner" style={{ color: 'var(--accent)' }}>{icon}</div>
              </div>
              <div>
                <div className="detail-label">{label}</div>
                <div className="detail-val">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}