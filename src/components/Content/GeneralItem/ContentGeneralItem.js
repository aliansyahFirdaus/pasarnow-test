import { Stack } from "react-bootstrap";

import React from "react";
import styles from "./ContentGeneralItem.module.css";

export default function ContentGeneralItem({ content }) {
  const linkGenerate = (link) => link.split("/")[2];
  return (
    <Stack gap={1} className={styles.content}>
      <a href={"#"} className={styles.link} target="_blank">
        {/* <i className="fa-solid fa-globe me-2" /> */}
        https://{linkGenerate(content.link)}
      </a>
      <a className={styles.title} href="#">
        {content.title}
      </a>
      <p>{content.description}</p>
    </Stack>
  );
}
