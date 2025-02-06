import { useInfoSelector } from "@/store/store-hooks";
import styles from "./HeaderProfile.module.css";

const HeaderProfile = () => {
  const profile = useInfoSelector((state) => state.profile.profile);

  return (
    <div className={styles['container']}>
      <h1>{profile.name}</h1>
      <h2>{profile.position}</h2>
      <p>{profile.summary}</p>
    </div>
  );
};

export default HeaderProfile;
