import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";
import about from "../../data/about.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {about.map((item) => (
            <li key={item.id} className={styles.aboutItem}>
              <img src={getImageUrl(item.img)} alt={item.title} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
