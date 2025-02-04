import { useInfoSelector } from "@/store/store-hooks";
import styles from "./About.module.css";

const About = () => {
  const profile = useInfoSelector((state) => state.profile.profile);

  const sWords = ["Bandwaggon.ai,", "Meridian", "Brothers,"];

  return (
    <div className={styles["container"]}>
      <h1>About</h1>
      {profile.about_paragraphs.length > 0 &&
        profile.about_paragraphs.map((info, index) => (
          <p key={index}>
            {info.text.split(" ").map((word, wordIndex) => {
              if (sWords.includes(word)) {
                return <strong key={wordIndex}>{word} </strong>;
              } else {
                return <span key={wordIndex}>{word} </span>;
              }
            })}
          </p>
        ))}
    </div>
  );
};

export default About;
