import React from 'react'
import "../css/footer.css";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>My Portfolio</strong>
          <div className="muted">Built with React + Vite</div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-meta">
          <small>© {year} Portfolio</small>
        </div>
      </div>
    </footer>
  )
}
