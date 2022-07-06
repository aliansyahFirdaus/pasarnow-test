import { Stack } from "react-bootstrap";

import React from "react";
import styles from "./ContentNewsItem.module.css";

export default function ContentNewsItem({ content }) {
  return (
    <Stack direction="horizontal" gap={3} className={styles.wrapper}>
      <Stack gap={3} className={styles.content}>
        <a href={"#"} className={styles.link} target="_blank">
          <i className="fa-solid fa-globe me-2" /> https://facebook.com
        </a>
        <a  href={"#"} className={styles.title}>
          Aliansyah Firdaus - Universitas Pamulang
        </a>
        <p>10 hari lalu</p>
      </Stack>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsJJNkJXDf8KTp8UGExyf908fh1zgOXwC8A&usqp=CAU" />
    </Stack>
  );
}
