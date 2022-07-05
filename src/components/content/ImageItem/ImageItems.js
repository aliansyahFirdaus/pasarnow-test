import React from "react";
import ContentImagesItem from "./ContentImageItem";
import styles from "./ImageItems.module.css";

export default function ImageItems({data}) {
  return (
    <div className={styles.mansonry}>
      <ContentImagesItem content={""} />
      <ContentImagesItem content={""} />
      <ContentImagesItem content={""} />
    </div>
  );
}
