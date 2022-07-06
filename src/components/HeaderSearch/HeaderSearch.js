import { Stack } from "react-bootstrap";

import React from "react";
import Search from "../Search/Search";
import styles from "./HeaderSearch.module.css";

export default function HeaderSearch({
  typingHandler,
  changeCategoryHandler,

  keyword,
  selected,
}) {
  return (
    <Stack gap={3} className={styles.header}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          width={110}
        />
      </div>
      <Search
        typingHandler={typingHandler}
        changeCategoryHandler={changeCategoryHandler}
        keyword={keyword}
        selected={selected}
      />
    </Stack>
  );
}
