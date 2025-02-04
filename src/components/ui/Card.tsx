import styles from "./Card.module.css";
import { type InfoCard } from "@/types/Types";

type CardProps = {
  info: InfoCard;
};

const Card = ({ info }: CardProps) => {
  return (
    <a
      href={info.link || "https://alejoforero.com/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles["card"]}>
        <div className={styles["left-card"]}>
          {!info.type && <p>{info.date}</p>}
          {info.type == "project" && <img src={info.imageUrl} />}
        </div>
        <div className={styles["info"]}>
          <h2>{info.title}</h2>
          <p>{info.summary}</p>
          {info.tech.split(",").map((word) => (
            <span className={styles["tech"]}>{word}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
