import { Stack } from "react-bootstrap";

import React from "react";
import styles from "./ContentNewsItem.module.css";
import ReactTimeAgo from "react-time-ago";

export default function ContentNewsItem({ content }) {
  const titleTruncate = (str) => {
    return str.length > 50 ? str.slice(0, 50).concat("...") : str;
  };

  return (
    <Stack direction="horizontal" gap={3} className={styles.wrapper}>
      <Stack gap={3} className={styles.content}>
        <a
          href={content.link || "#"}
          className={styles.link}
          target="_blank"
        >
          <i class="fa-solid fa-newspaper me-2" /> {content.source}
        </a>
        <a href={"#"} className={styles.title}>
          {titleTruncate(content.title)}
        </a>
        <p>
          <ReactTimeAgo date={new Date(content.published)} />
        </p>
      </Stack>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsJJNkJXDf8KTp8UGExyf908fh1zgOXwC8A&usqp=CAU" />
    </Stack>
  );
}
