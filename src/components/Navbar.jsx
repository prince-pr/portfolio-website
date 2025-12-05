import React from 'react'
/* Created by: Prince Pookkulam Reji */

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#">My Portfolio</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
