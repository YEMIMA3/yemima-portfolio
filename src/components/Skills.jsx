import React from "react";
import "../styles/Skills.css";

const skillCategories = [
  {
    label: "Languages",
    color: "purple",
    skills: ["Java", "Python", "C", "SQL", "JavaScript"],
  },
  {
    label: "Web Technologies",
    color: "teal",
    skills: ["HTML", "CSS", "React", "Vue", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    label: "Data & AI",
    color: "amber",
    skills: ["MongoDB", "spaCy", "scikit-learn", "NLP"],
  },
  {
    label: "Tools & Platforms",
    color: "pink",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"],
  },
  {
    label: "Design & UI/UX",
    color: "cyan",
    skills: ["Figma","Canva","Adobe Illustrator (Basics)","Color Theory"],
  },
  {
    label: "Core Subjects",
    color: "indigo",
    skills: ["DataBase Management Systems (DBMS)","Operating Systems","Computer Networks","Data Structures & Algorithms (DSA)"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-tag">Technical skills</div>
        <div className="section-title">What I work with.</div>

        <div className="marquee-wrapper">
          {skillCategories.map((category, rowIdx) => (
            <div className="marquee-row" key={rowIdx}>
              <div className="marquee-label">{category.label}</div>
              <div className="marquee-track">
                <div className="marquee-content">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={`tag tag--${category.color}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}