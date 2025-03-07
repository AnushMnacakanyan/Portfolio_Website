import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contact from "../../data/contact.json";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {contact.map((item) => (
          <li key={item.id} className={styles.link}>
            <img src={getImageUrl(item.img)} alt={item.alt} />
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
