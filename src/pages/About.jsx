import "../css/about.css";
import profileImg from "../assets/profile.png";

const About = () => {
  return (
    <section className="about-section">
      <img src={profileImg} alt="Profile" className="profile-img" />

      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate front-end developer who loves creating beautiful,
          accessible, and responsive user interfaces with modern web technology.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>TailwindCSS</li>
          <li>TypeScript</li>
          <li>Redux Toolkit</li>
          <li>Responsive Design</li>
          <li>REST APIs</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Authentication (JWT/OAuth)</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
