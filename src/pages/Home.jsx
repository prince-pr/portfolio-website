import React from 'react'
import '../css/home.css'
/* Created by: Prince Pookkulam Reji */

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content container">
          <h1>Hi, I'm a dev</h1>
          <p className="lead">I build accessible, responsive front-end apps with modern tooling.</p>
          <a className="cta" href="#projects">See my work</a>
        </div>
      </section>

      <section id="about" className="about container">
        <h2>About</h2>
        <p>
          A short bio goes here. Replace this text with a few sentences about
          your background, skills, and interests.
        </p>
      </section>

      <section id="projects" className="projects container">
        <h2>Projects</h2>
        <p>Will showcase 2-3 projects here. Add images to <code>src/images/</code> and link them from this section.</p>
      </section>

      <section id="contact" className="contact container">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
      </section>
    </main>
  )
}
