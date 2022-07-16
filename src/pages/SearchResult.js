import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

import React from "react";
import styles from "./SearchResult.module.css";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";

export default function SearchResult() {
  const location = useLocation();

  return (
    <Container fluid className={styles["container-result"]}>
      <HeaderSearch logo={true} />

      <div
        className={
          location.pathname.split("/")[2] !== "image"
            ? styles.result
            : styles["result-image-tab"]
        }
      >
        <Outlet />
      </div>
    </Container>
  );
}
