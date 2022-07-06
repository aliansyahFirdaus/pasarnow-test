import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";
import styles from "./Header.module.css";
import CategoryButton from "../CategoryButton/CategoryButton";

export default function Header({ selected, selectedHandler, logo }) {
  return (
    <Stack gap={3} direction="horizontal" className={styles.header}>
      {!logo && (
        <CategoryButton
          selected={selected}
          selectedHandler={selectedHandler}
        />
      )}

      {logo && (
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={110}
          />
        </Link>
      )}

      <div className={styles.profile}>
        <i class="fa-solid fa-user" />
      </div>
    </Stack>
  );
}
