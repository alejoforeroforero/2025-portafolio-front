import Card from '../ui/Card';
import { netArtData } from './NetArtData';
import styles from './NetArt.module.css';

const NetArt = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["back"]}><a href='/'>back to home</a></div>
      <h1>NetArt Projects</h1>
      {netArtData.map((project) => (
        <Card key={`project-${project.id}`} info={project} />
      ))}
    </div>
  )
}

export default NetArt
