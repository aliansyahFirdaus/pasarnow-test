import React from "react";
import ContentImagesItem from "./ContentImageItem";
import styles from "./ImageItems.module.css";

export default function ImageItems({ data }) {
  return (
    <div className={styles.mansonry}>
      {data.map((content) => (
        <ContentImagesItem key={content.alt} content={content} />
      ))}
    </div>
  );
}
