import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./HeaderLinks.module.css";

const HeaderLinks = () => {
  return (
    <div className={styles["container"]}>
      <a
        href="https://www.linkedin.com/in/alejoforeroforero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles["social-icon"]} />
      </a>
      <a
        href="https://www.github.com/alejoforeroforero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles["social-icon"]} />
      </a>
      <a
        href="https://www.instagram.com/alejoforeroforero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles["social-icon"]} />
      </a>
    </div>
  );
};

export default HeaderLinks;
