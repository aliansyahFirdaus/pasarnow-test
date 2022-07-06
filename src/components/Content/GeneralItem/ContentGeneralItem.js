import { Stack } from "react-bootstrap";

import React from "react";
import styles from "./ContentGeneralItem.module.css";

export default function ContentGeneralItem({ content }) {
  return (
    <Stack gap={3} className={styles.content}>
      <a href={"#"} className={styles.link} target="_blank">
        <i className="fa-solid fa-globe me-2" /> https://facebook.com
      </a>
      <a className={styles.title} href="#">
        Aliansyah Firdaus - Universitas Pamulang
      </a>
      <p>
        Asda Stores Ltd. is a British supermarket chain. It is headquartered in
        Leeds, England. ... The company was founded in 1949 .
      </p>
    </Stack>
  );
}
