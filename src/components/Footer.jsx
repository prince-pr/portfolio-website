/* Created by: Prince Pookkulam Reji */
/* Updated by: Vivek Gengadiya */
// Further updated by: Viswanathan Lakshmanan */
import React from 'react'
import "../css/footer.css";
import { Link } from 'react-router-dom';

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
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-meta">
          <small>© {year} Portfolio</small>
        </div>
      </div>
    </footer>
  )
}
