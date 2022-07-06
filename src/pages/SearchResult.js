import { Container, Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import React from "react";
import styles from "./SearchResult.module.css";
import Search from "../components/Search/Search";
import HeaderSearch from "../components/Header/Header";
import CategoryButton from "../components/CategoryButton/CategoryButton";

export default function SearchResult({
  changeCategoryHandler,
  typingHandler,
  selectedHandler,
  scrollingHandler,

  keyword,
  selected,
}) {
  return (
    <Container
      fluid
      className="vh-100 p-0"
      style={{ overflow: "scroll" }}
      onScroll={scrollingHandler}
    >
      <Stack>
        <HeaderSearch
          selected={selected}
          keyword={keyword}
          selectedHandler={selectedHandler}
          logo={true}
        />
        <Search
          typingHandler={typingHandler}
          changeCategoryHandler={changeCategoryHandler}
          keyword={keyword}
          selected={selected}
        />
      </Stack>

      <div className={styles.radio}>
        <CategoryButton
          selected={selected}
          keyword={keyword}
          selectedHandler={selectedHandler}
          link={true}
        />
      </div>

      <Outlet />
    </Container>
  );
}
