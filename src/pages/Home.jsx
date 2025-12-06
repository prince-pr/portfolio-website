import "../css/home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hello, I'm <span>Developer</span></h1>
        <p>A Front-end Developer passionate about building modern web experiences.</p>
        <a href="/projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
