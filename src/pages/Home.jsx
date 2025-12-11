/* Created by: Prince Pookkulam Reji */
/* Updated by: Vivek Gengadiya */
// Further updated by: Viswanathan Lakshmanan */
import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hello, I'm <span>Developer</span></h1>
        <p>A Front-end Developer passionate about building modern web experiences.</p>
        <Link to="/projects" className="btn-primary">View My Work</Link>
      </div>
    </section>
  );
};

export default Home;
