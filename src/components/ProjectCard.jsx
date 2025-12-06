import "../css/projects.css";

const ProjectCard = ({ img, title, desc }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;
