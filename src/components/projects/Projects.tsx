import styles from "./Projects.module.css";
import { projectsData } from "./ProjectsData";
import Card from "../ui/Card";


const Projects = () => {
  return (
    <div className={styles["container"]}>
      <h1>Projects</h1>
      {projectsData.map((project) => (
        <Card key={`project-${project.id}`} info={project} />
      ))}
    </div>
  );
};

export default Projects;
