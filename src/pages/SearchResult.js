import { Container, Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import React from "react";
import styles from "./SearchResult.module.css";
import Search from "../components/Search/Search";
import HeaderSearch from "../components/Header/Header";
import CategoryButton from "../components/CategoryButton/CategoryButton";

export default function SearchResult({ scrollingHandler }) {
  return (
    <Container
      fluid
      className="vh-100 p-0"
      style={{ overflow: "scroll" }}
      onScroll={scrollingHandler}
    >
      <Stack>
        <HeaderSearch logo={true} />
        <Search />
      </Stack>

      <div className={styles.radio}>
        <CategoryButton link={true} />
      </div>

      <Outlet />
    </Container>
  );
}
