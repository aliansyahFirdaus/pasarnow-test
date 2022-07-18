import { Button, Stack } from "react-bootstrap";
import { newsAction } from "../../../store/slice/news-slice";
import { useDispatch } from "react-redux";

import React from "react";
import styles from "./ContentNewsItem.module.css";
import ReactTimeAgo from "react-time-ago";

export default function ContentNewsItem({ content, id }) {
  const dispatch = useDispatch();
  const deleteHandler = (id) => dispatch(newsAction.deleteNews(id));

  return (
    <Stack direction="horizontal" gap={3} className={styles.wrapper}>
      <Stack gap={3} className={styles.content}>
        <a href={content.link} className={styles.link} target="_blank">
          <i className="fa-solid fa-newspaper me-2" /> {content.source.title}
        </a>
        <a href={"#"} className={styles.title}>
          {content.title}
        </a>
        <p>
          <ReactTimeAgo date={new Date(content.published)} />
        </p>
      </Stack>

      <Button
        className={styles["delete-btn"]}
        onClick={(e) => {
          e.preventDefault();
          deleteHandler(id);
        }}
      >
        <i className="fa-solid fa-trash-can" />
      </Button>

      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsJJNkJXDf8KTp8UGExyf908fh1zgOXwC8A&usqp=CAU" /> */}

    </Stack>
  );
}
