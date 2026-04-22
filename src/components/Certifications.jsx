import React, { useState } from "react";
import "../styles/Certifications.css";
import cer1 from "../assets/Amazon python.png";
import cer2 from "../assets/Amazon DSA.png";
import cer3 from "../assets/Cisco C.png";

const certs = [
  {
    issuer: "Amazon Future Engineer",
    name: "Programming in Python",
    icon: "⚡",
    grad: "var(--grad1)",
    color: "var(--accent)",
    image: cer1,
  },
  {
    issuer: "Amazon Future Engineer",
    name: "Basics of Java and DSA",
    icon: "⚡",
    grad: "var(--grad3)",
    color: "var(--accent2)",
    image: cer2,
  },
  {
    issuer: "Cisco Networking Academy",
    name: "Programming Essentials in C",
    icon: "⚡",
    grad: "var(--grad2)",
    color: "var(--accent4)",
    image: cer3,
  },
];

function CertCard({ cert, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="cert-card"
      style={{ "--cert-color": cert.color }}
      onClick={() => onClick(cert.image)}
    >
      {/* Issuer */}
      <div className="cert-issuer">
        <span className="cert-icon-small">{cert.icon}</span>
        {cert.issuer}
      </div>

      {/* Image */}
      <div className="cert-img-wrap">
        {!imgError ? (
          <img
            src={cert.image}
            alt={cert.name}
            className="cert-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="cert-img-fallback">
            <span>{cert.icon}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="cert-footer">
        <div className="cert-name">{cert.name}</div>
        <div className="cert-bar" style={{ background: cert.grad }} />
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="certifications" className="section-inner">
      <div className="section-tag">Certifications</div>
      <div className="section-title">What I've earned.</div>

      <div className="certs-grid">
        {certs.map((cert) => (
          <CertCard
            key={cert.name}
            cert={cert}
            onClick={setSelectedImg}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="cert-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="certificate" className="cert-modal-img" />
        </div>
      )}
    </section>
  );
}