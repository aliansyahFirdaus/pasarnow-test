import { Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import React, { Fragment } from "react";
import styles from "./HeaderSearch.module.css";
import CategoryButton from "../CategoryButton/CategoryButton";
import Search from "../Search/Search";

export default function HeaderSearch() {
  return (
    <Container fluid direction="horizontal" className={styles.header}>
      <div className={styles["logo-header"]}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={110}
          />
        </Link>
      </div>

      <div className={styles.search}>
        <Search />
        <CategoryButton link={true} />
      </div>

      <div className={styles.profile}>
        <i className="fa-solid fa-user" />
      </div>
    </Container>
  );
}
