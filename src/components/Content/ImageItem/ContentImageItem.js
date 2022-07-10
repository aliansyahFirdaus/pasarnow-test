import React from "react";
import styles from "./ContentImageItem.module.css";

export default function ContentImagesItem({ content }) {
  return (
    <div className={styles.card}>
      <img src={content.image.src} alt={content.image.src} />
      <p>{content.link.title}</p>
      <a href={content.link.href}>{content.link.href.split("/")[5]}</a>
    </div>
  );
}
