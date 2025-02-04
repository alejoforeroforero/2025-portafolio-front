import { useEffect } from "react";
import { useInfoDispatch, useInfoSelector } from "@/store/store-hooks";
import { getProfile } from "@/store/slices/profile-actions";
import styles from "./HeaderProfile.module.css";

const HeaderProfile = () => {
  const dispatch = useInfoDispatch();
  const profile = useInfoSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={styles['container']}>
      <h1>{profile.name}</h1>
      <h2>{profile.position}</h2>
      <p>{profile.summary}</p>
    </div>
  );
};

export default HeaderProfile;
