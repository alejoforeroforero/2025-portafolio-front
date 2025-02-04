import { useEffect } from "react";
import { useInfoDispatch, useInfoSelector } from "@/store/store-hooks";
import { getExperience } from "@/store/slices/experience-actions";
import styles from "./Experience.module.css";
import Card from "../ui/Card";

const Experience = () => {
  const dispatch = useInfoDispatch();
  const experience = useInfoSelector((state) => state.experience.info);

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  return (
    <div className={styles["container"]}>
      <h1>Experience</h1>
      {experience.map((info) => (
        <Card key={`experience-${info.id}`} info={info} />
      ))}
    </div>
  );
};

export default Experience;
