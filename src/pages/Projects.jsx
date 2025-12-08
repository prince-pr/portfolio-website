import "../css/projects.css";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="project-grid">
  <ProjectCard
    img={project1}
    title="Portfolio Website"
    desc="Modern SPA built with React + Router"
  />

  <ProjectCard
    img={project2}
    title="E-Commerce UI"
    desc="Responsive online store design"
  />

  <ProjectCard
    img={project3}
    title=".NET Bookstore Application"
    desc="Full CRUD bookstore app built with ASP.NET Web Forms & SQL Database"
  />

  <ProjectCard
    img={project4}
    title="WordPress Business Website"
    desc="Custom-designed WordPress site with WooCommerce integration"
  />
</div>

    </section>
  );
};

export default Projects;
